import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Axios from "axios";

export default class CropDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: null,
      crop: {
        aspect: 1 / 1,
        x: 0,
        y: 0,
        width: 100
      },
      croppedImageUrl: null,
      imageBlob: null,
      defaultImage: true,
      loading: null
    };
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image, crop) => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = crop => {
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
    console.log("uploading...");
    const { imageBlob } = this.state;
    const formData = new FormData();
    formData.append("image", imageBlob);

    this.setState({ loading: true });

    Axios({
      method: "post",
      url: "/api/admin/products/images",
      data: formData
    })
      .then(response => {
        console.log(response);
        this.props.addImage(response.data);

        //todo this is sucess upload
      })
      .catch(response => {
        console.log(response);
      });
  };

  render() {
    const { src, crop, defaultImage, croppedImageUrl, loading } = this.state;
    return (
      <div>
        {loading && (
          <div>
            <h3>Uploading ....</h3>
          </div>
        )}
        <h4>Crop and Upload Image</h4>
        <input type="file" onChange={this.onSelectFile} />

        {src && defaultImage && (
          <div>
            <ReactCrop
              src={src}
              crop={crop}
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
            <div>
              <button onClick={() => this.setState({ defaultImage: false })}>
                Crop
              </button>
            </div>
          </div>
        )}

        {!defaultImage && (
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
        )}
      </div>
    );
  }
}
