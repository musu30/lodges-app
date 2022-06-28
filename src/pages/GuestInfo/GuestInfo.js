import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  Popover,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Bookings from "../../components/Bookings";
import styles from "./guestinfo.module.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CustomLabel from "../../components/CustomLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import {
  AllCells,
  ArrivalCells,
  DraftCells,
  DeletedCells,
  DepartureCells,
} from "../../utils/models/tablemodels";
import AllTable from "../../components/Tables/AllTable";
import DeleteTableDataDlg from "../../components/Diologues/DeleteTableDataDlg";
import CustomFilter from "../../components/CustomFilter/CustomFilter";
import CustomFilterPopOver from "../../components/CustomFilters/CustomFIlterPopover";
import Appbar from "../../components/AppBar/Appbar";
import TablePdfGeneration from "../../components/PdfGenerator/TablePdfGeneration";
function GuestInfo() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [deleteData, setDeleteData] = useState([]);
  const [dltDlgOpen, setDltDlgOpen] = useState(false);
  const searchComponent = useRef(null);
  const [openCustom, setOpenCustom] = useState(false);
  const [filerValue, setFilterValue] = useState(false);
  const [tblIndex, setTblIndex] = useState(0);
  const handleFilterChange = (data) => {
    console.log("data is =>", data);
    if (data.id == 5) {
      // console.log("data in =>", data);
      setAnchorEl(true);
    }
  };
  const tabs = [
    {
      id: 0,
      value: "All",
      heads: AllCells,
    },
    { id: 1, value: "Arrival", heads: ArrivalCells },
    {
      id: 2,
      value: "Departure",
      heads: DepartureCells,
    },
    {
      id: 3,
      value: "Deleted",
      heads: DeletedCells,
    },
    {
      id: 4,
      value: "Drafts",
      heads: DraftCells,
    },
  ];

  const filterColoumns = [
    { id: 0, value: "Today" },
    { id: 1, value: "Yesterday" },
    { id: 2, value: "This week" },
    { id: 3, value: "Last Week" },
    { id: 4, value: "Last Month" },
    { id: 5, value: "Custom" },
  ];

  // const tablesData=[AllCells,ArrivalCells];

  const handleChange = (event, newValue) => {
    console.log("new value is --------", newValue);
    setValue(newValue);
    setTblIndex(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (value) => {
    setValue(value);
  };

  const handleCustomDateChange = (value) => {
    setFilterValue(value);
  };

  const handleClickPrint = () => {
    console.log("clicked the print");
    // setPrint(true);
    // setPrintheads();
    // setPrintVal();
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          id={styles.mainbox}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },

            background: "rgba(0,0,0,0.42)",
          }}
          style={{
            marginTop: "62px",
            marginRight: "44px",
            marginBottom: "44px",
          }}
          flex={4}
        >
          {/* <Box style={{display:"flex",justifyContent:"space-between"}>

          </Box> */}
          <Appbar />
          <Box
            id={styles.firstbox}
            style={{ marginLeft: "30px", marginBottom: "8px" }}
          >
            <img
              style={{ width: "14px", height: "24px", cursor: "pointer" }}
              src="/images/Icon_left_arrow.png"
              onClick={() => {
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
              Guest Info
            </Typography>
            {/* <CustomLabel style={{ paddingLeft: "18px" }} label="Guest Info" /> */}
          </Box>

          <Box id={styles.firstbox} style={{ marginLeft: "25px" }}>
            <CustomLabel style={{ paddingLeft: "18px" }} label="Search" />
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
                onChange={(event) => searchComponent.handleSearch(event)}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon style={{ color: "#00B3AE" }} />
              </IconButton>
            </Paper>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid container spacing={2} style={{ margin: "15px" }}>
              <Grid item xs={10} lg={11} md={10}>
                {filterColoumns.map((data, index) => {
                  return data.value === "Custom" ? (
                    <>
                      <Button
                        variant="contained"
                        id={styles.filterbutton}
                        onClick={handleClick}
                      >
                        {data.value}
                      </Button>
                      <React.Fragment>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            // onClick={handleClose}
                            PaperProps={{
                              elevation: 0,
                              sx: {
                                overflow: "visible",
                                filter:
                                  "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                borderRadius: "20px",
                                color: "white",
                                background: "#00D5CF",
                              },
                            }}
                            anchorOrigin={{
                              vertical: "center",
                              horizontal: "right",
                            }}
                            transformOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                            }}
                          >
                            <MenuItem>
                              <CustomLabel
                                style={{ paddingLeft: "18px" }}
                                label="From"
                              />

                              <DesktopDatePicker
                                inputFormat="dd/mm/yyyy"
                                value={filerValue}
                                onChange={handleCustomDateChange}
                                //   {...props.register(props.name)}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    sx={{
                                      width: "100%",
                                      background: "white!important",
                                      borderRadius: "10px",
                                    }}
                                  />
                                )}
                              />
                            </MenuItem>
                            <MenuItem>
                              <CustomLabel
                                style={{ paddingLeft: "18px" }}
                                label="To"
                              />
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <DesktopDatePicker
                                  inputFormat="dd/mm/yyyy"
                                  value={filerValue}
                                  onChange={handleCustomDateChange}
                                  //   {...props.register(props.name)}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      sx={{
                                        width: "100%",
                                        background: "white!important",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  )}
                                />
                              </LocalizationProvider>
                            </MenuItem>
                            <MenuItem>
                              <CustomLabel
                                style={{ paddingLeft: "18px" }}
                                label="From Time"
                              />
                              <TimePicker
                                value={filerValue}
                                onChange={handleCustomDateChange}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    sx={{
                                      width: "100%",
                                      background: "white!important",
                                      borderRadius: "10px",
                                    }}
                                  />
                                )}
                              />
                            </MenuItem>
                            <MenuItem>
                              <CustomLabel
                                style={{ paddingLeft: "18px" }}
                                label="To Time"
                              />
                              <TimePicker
                                value={filerValue}
                                onChange={handleCustomDateChange}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    sx={{
                                      width: "100%",
                                      background: "white!important",
                                      borderRadius: "10px",
                                    }}
                                  />
                                )}
                              />
                            </MenuItem>
                          </Menu>
                        </LocalizationProvider>
                      </React.Fragment>
                      {/* <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "center",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx= {{
                       
                          borderRadius: "20px",
                          // color: "white",
                          background: "#00D5CF",
                          width:"300px"
                        }}
                      >
                       <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Box style={{display:"flex",width:"300px"}}>
                            <CustomLabel
                              style={{ paddingLeft: "18px" }}
                              label="From"
                            />

                            <DesktopDatePicker
                              inputFormat="dd/mm/yyyy"
                              value={value}
                              onChange={handleDateChange}
                              //   {...props.register(props.name)}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  sx={{
                                    width: "100%",
                                    background: "white!important",
                                    borderRadius: "10px",
                                  }}
                                />
                              )}
                            />
                          </Box>
                        </LocalizationProvider>
                      </Popover> */}
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      id={styles.filterbutton}
                      onClick={() => handleFilterChange(data)}
                    >
                      {data.value}
                    </Button>
                  );
                })}
              </Grid>

              {/* <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <DeleteIcon
                  sx={{ color: "white" }}
                  onClick={() => {
                    console.log("hiiiii");
                    setDltDlgOpen(true);
                  }}
                />
              </Box> */}
            </Grid>
          </Stack>

          {/* <Box style={{ margin: "15px" }}>
            <Stack direction="row" spacing={2}>
              {filterColoumns.map((data, index) => (
                <Button
                  sx={{ color: "#00D5CF", backgroundColor: "white" }}
                  variant="contained"
                >
                  {data.value}
                </Button>
              ))}
            </Stack>
          </Box> */}

          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .Mui-selected": {
                    color: "white!important",
                  },
                }}
                style={{ color: "white" }}
              >
                {tabs.map((data, index) => (
                  <Tab
                    sx={{ color: "white" }}
                    label={data.value}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
              <Box
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginRight: "20px",
                }}
              >
                <PrintIcon
                  sx={{ color: "white", marginRight: "12px" }}
                  onClick={handleClickPrint}
                />
                <FileDownloadIcon
                  sx={{ color: "white", marginRight: "12px" }}
                  onClick={() => {
                    console.log("hiiiii");
                    // setDltDlgOpen(true);
                  }}
                />
                <DeleteIcon
                  sx={{ color: "white" }}
                  onClick={() => {
                    console.log("hiiiii");
                    setDltDlgOpen(true);
                  }}
                />
              </Box>
            </Box>

            {tabs.map((data, index) => (
              <TabPanel value={value} index={index}>
                <AllTable
                  index={tblIndex}
                  setDeleteData={setDeleteData}
                  searchComponent={searchComponent}
                />
              </TabPanel>
            ))}
          </Box>
        </Box>
      </Stack>
      <DeleteTableDataDlg
        open={dltDlgOpen}
        data={deleteData}
        setOpen={setDltDlgOpen}
      />
    </Box>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default GuestInfo;
