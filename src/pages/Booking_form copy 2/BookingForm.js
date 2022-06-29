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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CreatableSelect from "react-select/creatable";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CustomSelectValue from "../../components/CustomSelectValue";

function BookingForm() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
  ];

  const states = [
    { value: "kerala", id: 1994 },
    { value: "tamilnadu", id: 1995 },
  ];
  const idProofTypes = [
    { id: "1", value: "Adhar card" },
    { id: "2", value: "PassPort" },
  ];

  const cities = [
    { id: "1", label: "kochi" },
    { id: "2", label: "calicut" },
    { id: "3", label: "malappuram" },
  ];

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [qrdata, setQrData] = useState(null);
  const [qrDlg, setQrDlg] = useState(false);

  const [personCnt, setpersonCnt] = useState(0);
  const [roomCnt, setRoomCnt] = useState(0);
  const [roomlimit, setRoomlimit] = useState(0);
  const [selRooms, setSelRooms] = useState([]);

  const navigate = useNavigate();
  const [data, setData] = React.useState("Not Found");
  const handleScan = (data) => {
    setQrData(data);
    
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

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const onFileChange = (event) => {
    // Update the state
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log("image is =>", image);
  };

  const initialFvalues = {
    id_proof_type: "",
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    occupation: "",
    booking_source: "",
    check_in_date_time: "",
    check_out_date_time: "",
    no_of_persons: 0,
    no_of_rooms: 0,
    purpose_of_visit: "",
    signature: "",
    image_url: "",
    isPermanant: false,
  };

  const [values, setValues] = useState(initialFvalues);
  // const classes = useStyles();
  const handleInputDataChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Box id={styles.mainbox}>
      <Appbar />
      {/* <OcrImageRead /> */}
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
            <CustomLabel
              style={{
                color: "white",
                // marginBottom: "8px",
                // marginTop: "8px",
                // marginLeft: "10px",
                margin: "8px",
                fontweight: "700",
                fontSize: "18px",
              }}
              label="New Booking"
            />
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
            <CustomLabel label="Id Proof Type *" />
            <CustomSelect
              placeholder="test"
              name="id_proof_type"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={idProofTypes}
              value={values.id_proof_type}
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>
          <Box>
            <CustomLabel label="Name *" />
            <CustomTextField
              placeholder="name"
              name="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="Mobile *" />
            <CustomTextField
              placeholder="name"
              name="mobile"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="Address *" />

            <CustomTextField
              placeholder="adress"
              name="address"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="State *" />

            <CustomSelect
              placeholder="test"
              name="state"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={states}
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="City *" />
            <CreatableSelect
              options={cities}
              name="city"
              placeholder={"Select City"}
              isClearable
              onChange={(opt, meta) =>
                // this.setState({ cars: this.state.cars.slice().concat(opt) })
                console.log("hiii")
              }
              style={{
                borderRadius: "10px",
              }}
            />

            {/* <Autocomplete
             
              id="combo-box-demo"
              fullWidth
              options={cities}
              sx={{
                "& .MuiOutlinedInput-input": { height: "0px" },
        
                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-notchedOutline": {
                
                  borderRadius:"10px",
                },
                "& .MuiFormControl-root": {
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  borderRadius: "10px",
                },
                width: 300,
              }}
              name="stateCode"
              isOptionEqualToValue={(option, value) => {
                setValue("stateCode", option.id);
                return option;
              }}
              // {...register("stateCode")}
              renderInput={(params) => (
                <TextField {...params} value={params.value}  />
              )}
            /> */}
          </Box>

          <Box>
            <CustomLabel label="Occupation" />
            <CustomTextField
              placeholder="name"
              name="occupation"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="Booking Source *" />

            <CustomTextField
              placeholder="booking_source"
              name="booking_source"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
              handleChange={(e) => {
                handleInputDataChange(e);
              }}
            />
          </Box>
        </Grid>

        <Grid item lg={5} md={5} sm={5} style={{ justifyContent: "center" }}>
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
            <CustomLabel label="Check in date and time" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                value={value}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
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
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <CustomLabel label="Checkout date and time" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                value={value}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
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
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <CustomLabel label="No of Persons *" />

            <Box id={styles.searchbox}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  background: "#FFFFFF",
                  borderRadius: "10px",
                }}
                handleChange={(e) => {
                  handleInputDataChange(e);
                }}
                placeholder="No Of Persons"
                variant="outlined"
                size="small"
                value={personCnt}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <AddIcon
                          onClick={() => {
                            setpersonCnt(personCnt + 1);
                          }}
                        />
                        <RemoveIcon
                          onClick={() => {
                            if (personCnt >= 1) setpersonCnt(personCnt - 1);
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box>
            <CustomLabel label="No of Rooms *" />
            <Box id={styles.searchbox}>
              <TextField
                sx={{
                  marginTop: "5px",

                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  background: "#FFFFFF",
                  borderRadius: "10px",
                }}
                placeholder="No Of Rooms"
                fullWidth
                variant="outlined"
                size="small"
                value={roomlimit}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <AddIcon
                          onClick={() => {
                            setRoomCnt(1);
                            setRoomlimit(roomlimit + 1);
                          }}
                        />
                        <RemoveIcon
                          onClick={() => {
                            if (roomlimit > 1) {
                              setRoomlimit(roomlimit - 1);
                              setRoomCnt(1);
                            } else if ((roomlimit = 1)) {
                              setRoomlimit(roomlimit - 1);
                              setRoomCnt(0);
                            }
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {[...Array(roomCnt)].map((elementInArray, index) => (
            <Box
              sx={{
                color: "white",
                // marginBottom: "8px",
                marginTop: "8px",
                // marginLeft: "10px",
                margin: "8px",
              }}
            >
              <Box style={{ justifyContent: "space-between", display: "flex" }}>
                <CustomSelectValue
                  placeholder="test"
                  border="1px solid #707070"
                  borderRadius="10px"
                  name="name"
                  muiOptions={[{ value: "single" }, { value: "double" }]}
                  // onChange={handleChangeSelect}
                />
                <CustomTextField
                  placeholder="booking_source"
                  name="booking_source"
                  border="1px solid #707070"
                  borderRadius="10px"
                  height="0px"
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                />
                {index === roomCnt - 1 && roomCnt !== 1 ? (
                  <RemoveCircleRoundedIcon
                    style={{ color: "#E98D12" }}
                    onClick={() => {
                      if (roomCnt <= roomlimit && roomCnt > 1) {
                        setRoomCnt(roomCnt - 1);
                      }
                    }}
                  />
                ) : (
                  <AddCircleRoundedIcon
                    style={{ color: "#E98D12" }}
                    onClick={() => {
                      if (roomCnt < roomlimit) {
                        setRoomCnt(roomCnt + 1);
                      }
                    }}
                  />
                )}
                {/* {(index === (roomCnt - 2)) && (
                  <RemoveCircleRoundedIcon
                    style={{ color: "#E98D12" }}
                    onClick={() => {
                      if (roomCnt <= roomlimit && roomCnt > 1) {
                        setRoomCnt(roomCnt - 1);
                      }
                    }}
                  />
                  )} */}
              </Box>
            </Box>
          ))}

          <Box>
            <CustomLabel label="Purpose of visit *" />
            <CustomSelect
              placeholder="test"
              border="1px solid #707070"
              borderRadius="10px"
              muiOptions={[{ value: "dfdfd" }]}
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
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Save as Draft
        </Button>
        <Button variant="contained">Clear</Button>
        <Button
          variant="contained"
          onClick={() => {
            console.log("clicked on save");
          }}
        >
          Save
        </Button>
      </Box>
      <ImageDiologueBox open={open} setOpen={setOpen} />
      {/* <QrDiologueBox qrDlg={qrDlg} setQrDlg={setQrDlg} /> */}
    </Box>
  );
}

export default BookingForm;
