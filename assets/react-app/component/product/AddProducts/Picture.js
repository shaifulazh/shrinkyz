import React, { Component } from "react";
import Axios from "axios";
import loadImage from "blueimp-load-image/js";
import Cropperv2 from "./Cropperv2";
const pica = require("pica")();

export default class Picture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: [
        {
          imageid: "",
          imagename: "",
        },
      ],
      targetimage: null,
      showBlackScreen: false,
      message: null,
      showEasyCrop: false,
      payload: null,
    };
    this.inputFile = [];

    this.fileInput = (i) => (e) => {
      this.inputFile[i] = e;
    };
  }

  handleImageAdd = () => {
    this.setState({
      picture: this.state.picture.concat([{ imageid: "", imagename: "" }]),
    });
  };

  handleRemoveImage = (i) => {
    if (this.state.picture.length < 2) return;
    if (this.fileInput) this.inputFile[i].value = "";
    const remove = this.state.picture.filter((s, fi) => i !== fi);
    const imagedel = this.state.picture.filter((image, idx) => i === idx);
    const pictureup = imagedel.find((x) => x.imageid);
    if (typeof pictureup !== "undefined") {
      this.setState({ message: "Deleting Image" });
      Axios({
        method: "DELETE",
        url: `/api/admin/products/${pictureup.imageid}/image`,
      })
        .then((response) => {
          console.log(response);
          this.setState(
            { picture: remove, message: null },
            this.props.removepicture(remove)
          );
        })
        .catch((error) => {
          console.log(error);
          this.setState({ message: null });
          alert("Something Not Good i can feel it..");
        });
    } else {
      this.setState({
        picture: remove,
      });
    }
  };

  onSelectFile = (a) => (e) => {
    console.log("ini a :", a);
    console.log("ini e :", e.target.files);
    if (e.target.files[0].size > 8388608) {
      alert("Image File too big.. Please Put less than 8mb");
      e.target.value = "";
      return;
    }
    //original i edit on 2/8/2021 code

    // if (e.target.files && e.target.files.length > 0) {
    //   this.setState({ targetimage: a });
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     const payload = {
    //       src: reader.result,
    //       upload: this.handleUpload,
    //     };
    //     this.props.showCrop(payload);
    //   });
    //   reader.readAsDataURL(e.target.files[0]);
    // }

    if (e.target.files && e.target.files.length > 0) {
      this.setState({ targetimage: a });
      loadImage(
        e.target.files[0],
        async (img) => {
          var pixel = img.height * img.width;

          if (pixel > 3145728) {
            var ratio = pixel > 5038848 ? 0.5 : 0.8;

            try {
              this.setState({ message: "Please wait ..." });
              var imgcomp = await compressImage(img, ratio);

              var base64data = imgcomp.toDataURL(`image/jpeg`);
              const payload = {
                src: base64data,
                upload: this.handleUpload,
              };
              this.setState({
                payload: payload,
                message: null,
                showEasyCrop: true,
              });
            } catch (error) {
              this.setState({ message: error }, () => {
                setTimeout(() => {
                  this.setState({ message: null });
                }, 2000);
              });
            }
          } else {
            var base64data = img.toDataURL(`image/jpeg`);
            const payload = {
              src: base64data,
              upload: this.handleUpload,
            };
            this.setState({
              payload: payload,
              message: null,
              showEasyCrop: true,
            });
          }
        },
        { orientation: true, canvas: true }
      );
    }
  };

  handleUpload = (imageBlob, loader) => {
    const formData = new FormData();
    formData.append("image", imageBlob);

    //testing purpose
    // const file = dataURLtoFile("imageBlob", imageBlob)

    // console.log("image blob",file)
    Axios({
      method: "post",
      url: "/api/admin/products/images",
      data: formData,
    })
      .then((response) => {
        console.log(response);
        this.handleAddImage(response.data);
        this.handleCloseEasyCrop();
        loader(); //this is uploads to reset all to null for upload
      })
      .catch((response) => {
        console.log(response);
        this.handleCloseEasyCrop();
        // this.props.closeCrop();
        loader();
      });
  };

  handleAddImage = (e) => {
    console.log("image upload", e);
    const imageUpload = this.state.picture.map((image, i) => {
      if (i !== this.state.targetimage) return image;
      return { ...image, imageid: e.id, imagename: e.image };
    });
    this.setState({ picture: imageUpload }, () => {
      this.props.showPicture(imageUpload);
    });
  };

  handleShowEasyCrop = () => {
    this.setState({
      showEasyCrop: true,
    });
  };

  handleCloseEasyCrop = () => {
    this.setState({
      showEasyCrop: false,
    });
  };
  render() {
    console.log(this.state.picture);
    return (
      <div className="mt-3">
        {this.state.picture.map((data, i) => (
          <div key={i} className="d-flex">
            <div>
              <a
                href="#"
                className="btn btn-primary p-1 pt-1 mt-0.8 mr-1"
                onClick={(e) => {
                  e.preventDefault();
                  this.handleRemoveImage(i);
                }}
              >
                X
              </a>
            </div>

            <div className="m-1">{i + 1 + "."}</div>
            {data.imagename ? (
              <img
                className="p-2"
                src={`/images/${data.imagename}`}
                alt=""
                style={{ width: "130px", height: "130px" }}
              />
            ) : (
              <div>
                <input
                  required
                  key={i}
                  ref={this.fileInput(i)}
                  className="form-control-file m-1"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={this.onSelectFile(i)}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleShowEasyCrop();
                  }}
                >
                  Open Easy Crop
                </button>
              </div>
            )}
          </div>
        ))}

        <a
          href="#"
          className="btn  btn-primary btn-sm btn-block my-3"
          onClick={(e) => {
            e.preventDefault();
            this.handleImageAdd();
          }}
        >
          Add More Picture
        </a>

        {this.state.message && (
          <div style={submitDialog}>
            <div
              className="col-8 mx-auto col-md-6 col-lg-4 p-2"
              style={divDialog}
            >
              <h3>{this.state.message}</h3>
            </div>
          </div>
        )}

        <Cropperv2
          showDialog={this.state.showEasyCrop}
          closeDialog={this.handleCloseEasyCrop}
          payload={this.state.payload}
          upload={this.handleUpload}
        />
      </div>
    );
  }
}

const submitDialog = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.3)",
  zIndex: "1",
};
const divDialog = {
  background: "rgb(255, 255, 255)",
};

const compressImage = (img, crt) => {
  var offScreenCanvas = document.createElement("canvas");
  offScreenCanvas.width = img.width * crt;
  offScreenCanvas.height = img.height * crt;
  return pica
    .resize(img, offScreenCanvas)
    .then((imageCCS) => imageCCS)
    .catch((e) => e);
};
