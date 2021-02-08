import React, { useState, useEffect } from "react";
import Cropper from "react-easy-crop";
import { Button } from "@material-ui/core/";

export default function Cropperv2(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const dogImg =
    "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

  useEffect(() => {
    setOpenDialog(props.showDialog);
    console.log(props.showDialog);
  }, [openDialog]);

  function CloseDialog() {
    setOpenDialog(false);
    props.closeCropper();
  }
  const onCropComplete = () => {
    console.log("hello");
  };

  return (
    <div>
      {openDialog && (
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
  background: "rgba(0, 0, 0, 0.3)",
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
  border: "1px solid #f5f5f5",
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const croppedImageStyle = {
  maxWidth: "50vw",

  // position: "relative",
};
