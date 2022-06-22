import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  css,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState } from "react";
import CustomAutoComplete from "../../components/CustomAutoComplete";
import CustomTextField from "../../components/CustomTextField";
import styles from "./bookingForm.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CustomLabel from "../../components/CustomLabel";
import CustomSelect from "../../components/CustomSelect";
import ImageDiologueBox from "../../components/ImageDiologueBox";
import ReactSignatureCanvas from "react-signature-canvas";
import CanvasDraw from "react-canvas-draw";
import { WebcamCapture } from "../../components/WebCam";
import QrReader from "react-qr-scanner";
import QrDiologueBox from "../../components/qrDiologueBox";
import Scanner from "react-webcam-qr-scanner";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { useNavigate } from "react-router-dom";
import Appbar from "../../components/AppBar/Appbar";
import OcrImageRead from "../../components/OcrImageRead/OcrImageRead";
function BookingForm() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
  ];
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [qrdata, setQrData] = useState(null);
  const [qrDlg, setQrDlg] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = React.useState("Not Found");
  const handleScan = (data) => {
    setQrData(data);
    console.log(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  const handleDecode = (result) => {
    console.log("result is=>", result);
  };

  const handleScannerLoad = (mode) => {
    console.log(mode);
  };

  const onFileChange = (event) => {
    // Update the state
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log("image is =>", image);
  };

  return (
    <Box id={styles.mainbox}>
      <Appbar />
      {/* <OcrImageRead /> */}
      <Grid container spacing={3} style={{ paddingLeft: "10px" }}>
        <Grid item lg={6} md={6} sm={6}>
          <Box id={styles.firstbox}>
            <img
              style={{ width: "14px", height: "24px" }}
              src="/images/Icon_left_arrow.png"
              onClick={(item) => {
                navigate(-1);
              }}
            />
            <CustomLabel style={{ paddingLeft: "18px" }} label="New Booking" />
          </Box>
          <Box id={styles.firstbox}>
            <img
              id={styles.camera}
              onClick={() => {
                setOpen(true);
              }}
              src="/images/icon_camera.png"
            />
            <img
              id={styles.qrcode}
              onClick={() => {
                setQrDlg(true);
              }}
              src="/images/icon_qrcode.png"
            />
          </Box>
          <Box>
            <CustomLabel label="Name" />
            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="State" />

            <CustomAutoComplete
              width="300"
              radius="10px"
              options={top100Films}
            />
          </Box>
          <Box>
            <CustomLabel label="Address" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Purpose of visit" />
            <CustomSelect
              placeholder="test"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={[{ value: "dfdfd" }]}
            />
          </Box>

          <Box>
            <CustomLabel label="No of Rooms" />

            <CustomAutoComplete
              width="300"
              radius="10px"
              options={top100Films}
            />
          </Box>
          <Box>
            <CustomLabel label="Booking Source" />

            <CustomSelect
              placeholder="test"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={[{ value: "dfdfd" }]}
            />
          </Box>
          <Box id={styles.checkoutbox}>
            <CustomLabel label="Check in date and time" />

            <img id={styles.checkoutpic} src="/images/icon_calender.png" />
            <img id={styles.checkoutpic} src="/images/icon_clock.png" />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} style={{ paddingRight: "10px" }}>
          <Box id={styles.searchbox}>
            <TextField
              sx={{
                marginTop: "5px",
                marginRight: "20px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                background: "#FFFFFF",
                borderRadius: "10px",
              }}
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <CustomLabel label="Mobile" />
            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="City" />
            <CustomSelect
              placeholder="test"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={[{ value: "dfdfd" }]}
            />
          </Box>
          <Box>
            <CustomLabel label="Occupation" />
            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Number of Persons" />
            <CustomSelect
              placeholder="test"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={[{ value: "dfdfd" }]}
            />
          </Box>

          <Box>
            <CustomLabel label="Room Number" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>

          <Box>
            <CustomLabel label="Id Proof" />
            <CustomTextField
              placeholder="upload from camera"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
            <Box
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              sx={{
                width: "calc(100% - 2px)!important",
                height: "112px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <CanvasDraw /> */}
              <ReactSignatureCanvas
                id={styles.signaturepad}
                penColor="green"
                canvasProps={{
                  height: 112,
                  className: "sigCanvas",
                }}
                sx={{
                  width: "calc(100% - 2px)!important",
                  height: "112px",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // canvasProps={{
                //   className: styless.sign
                // }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          paddingTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained">Clear</Button>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Save
        </Button>
      </Box>
      <ImageDiologueBox open={open} setOpen={setOpen} />
      <QrDiologueBox qrDlg={qrDlg} setQrDlg={setQrDlg} />
   
    </Box>
  );
}

export default BookingForm;
