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
import { CLR_ORANGE } from "../utils/colors";

function ImageDiologueBox(props) {
  const [retake, setRetake] = useState(false);
  const [image, setImage] = useState(0);
  const imageCallback = useCallback((image) => {
    // console.log("image Data =>",image)
    setImage(image);
  }, []);
  const webcomponent = useRef(null);

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
              props.setOpen(false);
            }}
          />
          {/* <CloseIcon /> */}
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box
          style={{
            display: "flex",
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

          <WebcamCapture
            retake={retake}
            imageCallback={imageCallback}
            webcomponent={webcomponent}
            setRetake={setRetake}
          />

          <img
            style={{
              height: "35px",
              width: "35px",
              background: "red",
              top: "40vh",

              position: "absolute",
            }}
            src="/images/icon_image_sign.png"
          />
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
          disabled={!retake}
          // sx={{
          //   color: "white",
          // }}
          variant="contained"
          onClick={() => {
            webcomponent.retake();
          }}
        >
          Retake
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#00D5CF",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          onClick={() => {
            webcomponent.capture();
          }}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
}

export default ImageDiologueBox;
