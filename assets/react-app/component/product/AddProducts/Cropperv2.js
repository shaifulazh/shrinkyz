import React, { useState, useEffect, useRef, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Button, Slider } from "@material-ui/core/";
import CanvasCrop from "./CanvasCrop";

export default function Cropperv2(props) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  function CloseDialog() {
    props.closeDialog();
    clearState();
  }

  const showCroppedImage = async () => {
    try {
      const croppedImage = await CanvasCrop(
        props.payload.src,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  const UploadImage = () => {
    props.payload.upload(croppedImage.blob, clearState);
  };

  const clearState = () => {
    setCroppedImage(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setRotation(0);
    setCroppedAreaPixels(null);
    console.log("uploaded");
  };

  return (
    <div>
      {croppedImage && props.showDialog ? (
        <div>
          <div style={dialogStyle}>
            <div style={containerStyle}>
              <div style={containerButtonStyle}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={CloseDialog}
                >
                  Cancel
                </Button>
                <div className="m-3">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={UploadImage}
                  >
                    Save
                  </Button>
                </div>
              </div>
              <div style={containerCropperStyle}>
                <div className=" container  " style={cropperStyle}>
                  <div className="row justify-content-md-center">
                    <img
                      src={croppedImage.url}
                      alt=""
                      className="img-fluid"
                      style={{ width: "250px", height: "250px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {props.showDialog && (
            <div style={dialogStyle}>
              <div style={containerStyle}>
                <div style={containerButtonStyle}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={CloseDialog}
                  >
                    Cancel
                  </Button>
                  <div className="m-3">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={showCroppedImage}
                    >
                      Crop
                    </Button>
                  </div>
                </div>
                <div style={containerCropperStyle}>
                  <div style={cropperStyle}>
                    <Cropper
                      image={props.payload.src}
                      crop={crop}
                      zoom={zoom}
                      aspect={1}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                  </div>
                  <div style={sliderStyle}>
                    <h5 style={{ padding: "20px" }}>Zoom</h5>
                    <Slider
                      min={1}
                      max={3}
                      step={0.1}
                      value={zoom}
                      onChange={(e, zoom) => setZoom(zoom)}
                    />{" "}
                    <h5 style={{ padding: "20px" }}>Rotate</h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const dialogStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgb(0, 0, 0.4)",
  zIndex: "5",
};
const divDialog = {
  background: "rgb(255, 255, 255)",
};

const containerStyle = {
  height: "100vh",
  width: "100vw",
};
const containerCropperStyle = {
  height: "90%",
  padding: "10px",
};

const cropperStyle = {
  height: "90%",
  position: "relative",
};

const sliderStyle = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "60%",
};

const containerButtonStyle = {
  // border: "1px solid #f5f5f5",
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const croppedImageStyle = {
  maxWidth: "50vw",

  // position: "relative",
};
