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

import React, { useRef, useState } from "react";
import { styled } from "@mui/styles";
import CustomLabel from "./CustomLabel";
import { WebcamCapture } from "./WebCam";
import QrCodeReader from "./QrCodeReader";
import OcrImageRead from "./OcrImageRead/OcrImageRead";

function QrDiologueBox(props) {
  const [retake, setRetake] = useState(false);
  // const [capture, setCapture] = useState(false);

  const qrcodecomponent = useRef(null);

  return (
    <Dialog
      //   onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.qrDlg}
      sx={{
        "& .MuiPaper-root": {
          background: "#00BEB9!important",
          borderRadius: "20px",
        },
        "& .MuiDialogContent-root": {
          border: "none",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <CustomLabel label="Scan QR" />
        <IconButton
          aria-label="close"
          onClick={() => {
            props.setQrDlg(false);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box
          style={{
            display: "flex",

            justifyContent: "center",
            marginLeft: "20px",
            marginRight: "20px",
            height: "30vh",
            width: "40vw",
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

    

          {/* <QrCodeReader 
            retake={retake}
            qrcodecomponent={qrcodecomponent}
            setRetake={setRetake}
          /> */}

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
            qrcodecomponent.retake();
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
            qrcodecomponent.capture();
          }}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
}

export default QrDiologueBox;
