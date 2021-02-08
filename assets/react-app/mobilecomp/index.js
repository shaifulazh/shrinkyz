import React, { useState, useCallback , useRef} from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import loadImage from "blueimp-load-image/js";
import getUpload from "./cropImageUpload"
import { BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Index() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [image, setImage] = useState(null);
  const inputRef = useRef();
  const classes = useStyles();

    
  const triggerFileSelectPopup = () => inputRef.current.click();
    
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage.url);

    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);


  const onSelectFile = (event) => {

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
9
  const uploadfile = ()=>{

    getUpload(image,
      croppedAreaPixels,
      rotation);
    }

  


  return (
    <div>

<AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div style={containerStyle}>
        {image && !croppedImage ? (
       <div style={containerCropperStyle}>
        
        <div style={cropperStyle}>
              <Cropper
               style={{height: 400, width: '50%'}}
               image={image}
               crop={crop}
               rotation={rotation}
               zoom={zoom}
               aspect={4 / 3}
               onCropChange={setCrop}
               onRotationChange={setRotation}
               onCropComplete={onCropComplete}
               onZoomChange={setZoom}
               />


               <div style={sliderStyle}>
               <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />

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
        ): 
        (<>
        {croppedImage && (<div style={containerCropperStyle}>

            <img src={croppedImage} style={{width : "100%"}} alt=""/>

            <Button
             variant="contained"
             color="primary"
             size="large"
            onClick={uploadfile}>  upload</Button>
          </div>)}

        </>)
        }
        

          <div style={containerButtonStyle}>

               <input type="file" ref={inputRef} accept="image/jpeg" onChange={onSelectFile} style={{ display : "none"}}/>
              <Button 
               variant="contained"
               color="primary"
               size="large"
              onClick={triggerFileSelectPopup}>Choose</Button>
              <Button onClick={showCroppedImage}>Crop</Button>
  
          </div>
      </div>

     
    </div>
  );
}

const containerStyle = {
  
	height:  "100vh",
	width: "100vw"
}

const containerCropperStyle = {
  height: "80%",
	padding: "10px"
}


const cropperStyle =  {
	height: "80%",
  position : "relative"
}

const sliderStyle = {
	height: "20%",
	display: "flex",
	alignItems: "center",
	margin: "auto",
	width: "60%"
}

const containerButtonStyle = {
	border: "1px solid #f5f5f5",
	height: "20%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}





