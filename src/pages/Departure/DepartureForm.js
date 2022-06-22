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
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState } from "react";
import CustomAutoComplete from "../../components/CustomAutoComplete";
import CustomTextField from "../../components/CustomTextField";
import styles from "./departure.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CustomLabel from "../../components/CustomLabel";
import CustomSelect from "../../components/CustomSelect";
import ImageDiologueBox from "../../components/ImageDiologueBox";
import ReactSignatureCanvas from "react-signature-canvas";
import { WebcamCapture } from "../../components/WebCam";
import QrDiologueBox from "../../components/qrDiologueBox";
import { useNavigate } from "react-router-dom";
import Appbar from "../../components/AppBar/Appbar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function DepartureForm() {
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

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box id={styles.mainbox}>
      <Box style={{ paddingTop: "15px" }}>
        <Appbar />
      </Box>

      <Box
        id={styles.firstbox}
        style={{ marginLeft: "25px", justifyContent: "center" }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: "30px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search room no or id"
            inputProps={{ "aria-label": "Search room no or id" }}
            // onChange={(event) => searchComponent.handleSearch(event)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon style={{ color: "#00B3AE" }} />
          </IconButton>
        </Paper>
      </Box>

      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item lg={5} md={5} sm={5}>
          <Box id={styles.firstbox}>
            <img
              style={{ width: "14px", height: "24px", cursor: "pointer" }}
              src="/images/Icon_left_arrow.png"
              onClick={(item) => {
                navigate(-1);
              }}
            />
            <Typography
              sx={{
                color: "white",
                // marginBottom: "8px",
                // marginTop: "8px",
                // marginLeft: "10px",
                margin: "8px",
                fontweight: "700",
                fontSize: "18px",
              }}
            >
              Departure
            </Typography>
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
          <Box>
            <CustomLabel label="Check in date and time" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
               
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField
                    sx={{
                        "& .MuiOutlinedInput-input": { height: "0px" },
                
                        "& .MuiInputBase-input": {},
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "1px solid #707070",
                          borderRadius: "10px",
                        },
                      }}
                      style={{
                        background: "#FFFFFF",
                        borderRadius: "10px",
                        border: "none",
                        borderColor: "coral",
                      }}
                fullWidth
                     {...params} />}
              />
            </LocalizationProvider>
          </Box>
          {/* <Box id={styles.checkoutbox}>
            <CustomLabel label="Check in date and time" />

            <img id={styles.checkoutpic} src="/images/icon_calender.png" />
            <img id={styles.checkoutpic} src="/images/icon_clock.png" />
          </Box> */}
        </Grid>
        <Grid item lg={5} md={5} sm={5}>
          {/* <Box id={styles.searchbox}>
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
          </Box> */}
          <Box id={styles.firstbox} style={{ visibility: "hidden" }}>
            <img
              style={{ width: "14px", height: "24px", cursor: "pointer" }}
              src="/images/Icon_left_arrow.png"
            />
            <Typography
              sx={{
                color: "white",
                margin: "8px",
                fontweight: "700",
                fontSize: "18px",
              }}
            >
              Departure
            </Typography>
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
            <TextField
              sx={{
                // marginTop: "5px",
                // marginRight: "20px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                background: "#FFFFFF",
                borderRadius: "15px",
              }}
              //   placeholder="Search"
              variant="outlined"
              fullWidth
              disabled
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="Heading To" />

            <CustomAutoComplete
              width="300"
              radius="10px"
              options={top100Films}
            />
          </Box>
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
              marginTop: "15px",
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

export default DepartureForm;
