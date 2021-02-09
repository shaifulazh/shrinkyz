import React, { useState, useEffect } from "react";
import Cropper from "react-easy-crop";
import { Button, Slider } from "@material-ui/core/";

export default function Cropperv2(props) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState(null);

  const dogImg =
    "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

  // useEffect(() => {
  //   setOpenDialog(props.showDialog);
  //   console.log(props.showDialog);
  // }, [openDialog]);

  function CloseDialog() {
    props.closeDialog();
  }
  const onCropComplete = () => {
    console.log("hello");
  };

  return (
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
                Close
              </Button>
            </div>
            <div style={containerCropperStyle}>
              <div style={cropperStyle}>
                <Cropper
                  image={dogImg}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
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
                <Slider
                  value={rotation}
                  min={0}
                  max={360}
                  step={1}
                  aria-labelledby="Rotation"
                  onChange={(e, rotation) => setRotation(rotation)}
                />
              </div>
            </div>
          </div>
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
  zIndex: "100",
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
