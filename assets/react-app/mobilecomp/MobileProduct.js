import Cropper from "react-easy-crop";

import React, { Component } from "react";

export default class MobileProduct extends Component {
  state = {
    image:
      "https://www.shrinkyz.com/images/e28b856ebe2df2cd9c58a2b7e08c77f2.jpeg",
    crop: { x: 0, y: 0 },
    zoom: 2,
    aspect: 1 / 1,
  };

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  onZoomChange = (zoom) => {
    this.setState({ zoom });
  };

  render() {
    return (
      <div>
        <Cropper
          classname=""
          image={this.state.image}
          crop={this.state.crop}
          zoom={this.state.zoom}
          aspect={this.state.aspect}
          onCropChange={this.onCropChange}
          onCropComplete={this.onCropComplete}
          onZoomChange={this.onZoomChange}
        />
      </div>
    );
  }
}
