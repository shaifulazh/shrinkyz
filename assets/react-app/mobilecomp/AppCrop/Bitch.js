import React from "react";
// import "./App.css";
import "./index.css";
import loadImage from "blueimp-load-image/js";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import { generateDownload } from "./utils/cropImage";

export default function Bitch() {
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    // if (event.target.files && event.target.files.length > 0) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.addEventListener("load", () => {
    //     setImage(reader.result);
    //   });
    // }


    if (event.target.files && event.target.files.length > 0) {
      loadImage(
        event.target.files[0],
        (img) => {
          var base64data = img.toDataURL(`image/jpeg`);
          setImage(base64data);
        },
        { orientation: true, canvas: true }
      );
    }
  };

  const onDownload = () => {
    generateDownload(image, croppedArea);
    setTimeout(() => {
      setImage(null);
    }, 2000);
  };

  return (
    <div className="container">
        {image ? (
      <div className="container-cropper">
          <div>
            <div className="cropper">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="slider">
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
          </div>
      </div>
        ) : null}

      <div className="container-buttons">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={triggerFileSelectPopup}
          style={{ marginRight: "10px" }}
        >
          Choose
        </Button>
        <Button variant="contained" color="secondary" onClick={onDownload}>
          Download
        </Button>
        <button onClick={() => setImage(null)}>Close</button>
      </div>
    </div>
  );
}
