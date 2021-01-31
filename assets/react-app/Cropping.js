import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import { Spinner } from "react-bootstrap";
import "react-image-crop/dist/ReactCrop.css";
import "./crop.css";

export default class Cropping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: null,
      crop: {
        x: 0,
        y: 0,
        width: 100,

        aspect: 1 / 1
      },
      croppedImageUrl: null,
      imageBlob: null,
      showCropImage: false,
      loading: false
    };
  }

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

  showCropImage() {
    this.setState({
      showCropImage: true
    });
  }
  cancelLoad = () => {
    this.setState({
      loading: false,
      croppedImageUrl: null,
      imageBlob: null,
      showCropImage: false
    });
  };

  handleUpload = () => {
    this.setState({ loading: true }, () => {
      this.props.upload(this.state.imageBlob, this.cancelLoad);
    });
  };

  render() {
    const { croppedImageUrl, showCropImage } = this.state;

    return (
      <div>
        {this.props.showCrop && !this.state.loading && (
          <div className="crop ">
            <div className="dialog col-8 mx-auto col-md-6 col-lg-4 p-2">
              <div className="float-right">
                <button
                  className="btn btn-dark"
                  onClick={() => this.props.closeCrop()}
                >
                  <i className="fas fa-times-circle fa-2x" />
                </button>
              </div>

              {showCropImage ? (
                <div>
                  <div className="p-5">
                    <img
                      alt="Crop"
                      style={{ maxWidth: "100%" }}
                      src={croppedImageUrl}
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.setState({ showCropImage: false })}
                  >
                    Back
                  </button>
                  {"  "}

                  <button
                    className="btn btn-primary"
                    onClick={this.handleUpload}
                  >
                    Upload
                  </button>
                </div>
              ) : (
                <div>
                  <ReactCrop
                    src={this.props.src}
                    crop={this.state.crop}
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                  />
                  <button
                    className="btn btn-primary"
                    disabled={croppedImageUrl ? false : true}
                    onClick={() => this.showCropImage()}
                  >
                    Crop
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {this.props.showCrop && this.state.loading && (
          <div className="crop ">
            <div className="dialog col-8 mx-auto col-md-6 col-lg-4 p-5">
              <h4>
                <Spinner animation="border" /> Uploading Image....
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}
