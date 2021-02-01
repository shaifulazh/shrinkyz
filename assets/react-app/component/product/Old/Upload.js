import React, { Component } from "react";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";

export default class Upload extends Component {
  state = {
    src: null,
    crop: {
      aspect: 1 / 1
    },
    croppedImageUrl: null,
    imageBlob: null
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result }, () => {
          this.props.showCrop(this.state.src);
        })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image, crop) => {
    console.log("onimageload");
    this.imageRef = image;
  };

  onCropComplete = crop => {
    console.log("oncrop complete");
    this.makeClientCrop(crop);
  };

  onCropChange = crop => {
    console.log("oncropchange");
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        this.setState({
          imageBlob: blob
        });
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  handleUpload = () => {
    const { imageBlob } = this.state;
    const formData = new FormData();
    formData.append("image", imageBlob);

    axios({
      method: "post",
      url: "/api/admin/products/images",
      data: formData
    })
      .then(response => {
        const { addimage } = this.props;
        console.log(response);
        addimage(response.data);

        //todo this is sucess upload
      })
      .catch(response => {
        console.log(response);
      });
  };

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div>
            <input type="file" onChange={this.onSelectFile} />
          </div>
          {/* {src && (
            <ReactCrop
              src={src}
              crop={crop}
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
          )} */}
          <p />
          {/* {croppedImageUrl && (
            <div>
              <img
                alt="Crop"
                style={{ maxWidth: "100%" }}
                src={croppedImageUrl}
              />
              <p>
                {" "}
                <button onClick={this.handleUpload} className="btn btn-primary">
                  Upload
                </button>
              </p>
            </div>
          )} */}
        </div>
      </React.Fragment>
    );
  }
}
