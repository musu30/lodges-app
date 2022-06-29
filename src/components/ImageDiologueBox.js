import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React, { useCallback, useRef, useState } from "react";
import { styled } from "@mui/styles";
import CustomLabel from "./CustomLabel";
import { WebcamCapture } from "./WebCam";
import { CLR_LIGHT_WHITE, CLR_ORANGE } from "../utils/colors";
import { borderRadius } from "@mui/system";

function ImageDiologueBox(props) {
  const [retake, setRetake] = useState(false);
  const [image, setImage] = useState(0);
  const imageCallback = useCallback((image) => {
    // console.log("image Data =>",image)
    setImage(image);
  }, []);
  const webcomponent = useRef(null);

  const [source, setSource] = useState(null);
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <Dialog
      //   onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      sx={{
        "& .MuiPaper-root": {
          background: `${CLR_ORANGE}`,
          borderRadius: "20px",
        },
        "& .MuiDialogContent-root": {
          border: "none",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <CustomLabel label="Take Photo" />
        <IconButton
          aria-label="close"
          onClick={() => {
            props.setOpen(false);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <img
            style={{ width: "20px", height: "24px", cursor: "pointer" }}
            src="/images/icon_close.png"
            onClick={(item) => {
              // navigate(-1);
              setSource(null);
              props.setOpen(false);
            }}
          />
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box
          style={{
            justifyContent: "center",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          {/* <img
            style={{
              height: "30vh",
              width: "40vw",
              background: "green",
              position: "relative",
            }}
            src="/images/icon_close.png"
          /> */}

          {/* <WebcamCapture
            retake={retake}
            imageCallback={imageCallback}
            webcomponent={webcomponent}
            setRetake={setRetake}
          /> */}
          {source ? (
            <Box justifyContent="center">
              <img
                src={source}
                style={{ width: "500px", height: "300px" }}
                alt={"snap"}
              ></img>
            </Box>
          ) : (
            <Box justifyContent="center">
              <img
                src="images/img_sample_gallery.png"
                style={{ width: "100%", height: "300px" }}
                alt={"snap"}
              ></img>
            </Box>
          )}
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              capture="environment"
              onChange={(e) => handleCapture(e.target)}
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file">
              <Box
                sx={{
                  background: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "130px",
                  cursor: "pointer",
                }}
              ></Box>
            </label>
          </Box>

          {/* <img
            style={{
              height: "35px",
              width: "35px",
              background: "red",
              top: "40vh",

              position: "absolute",
            }}
            src="/images/icon_image_sign.png"
          /> */}
        </Box>
      </DialogContent>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          paddingBottom: "25px",
          marginTop: "10px",
        }}
      >
        <Button
          disabled={source}
          sx={{
            paddingLeft: "10px",
            paddingRight: "10px",
            background:`${CLR_LIGHT_WHITE}`,
            borderRadius:"10px",
            shadowColor: "1px 1px 6px #E98D12",
            color:`${CLR_ORANGE}`,
            "&:hover":{
              color:`${CLR_ORANGE}`,
              background:`${CLR_LIGHT_WHITE}`,
            }
          }}
          variant="contained"
          onClick={() => {
            webcomponent.retake();
          }}
        >
          Save as Image
        </Button>
        <Button
          variant="contained"
          disabled={source}
          sx={{
            paddingLeft: "10px",
            paddingRight: "10px",
            background:`${CLR_ORANGE}`,
            borderRadius:"10px",
            shadowColor: "1px 1px 6px #E98D12",
            "&:hover":{
              color:`${CLR_ORANGE}`,
              background:`${CLR_LIGHT_WHITE}`,
            }
          }}
          onClick={() => {
            webcomponent.capture();
          }}
        >
          Save as Id
        </Button>
      </Stack>
    </Dialog>
  );
}

export default ImageDiologueBox;
