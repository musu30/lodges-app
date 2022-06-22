import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import CustomLabel from "../CustomLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";
import styles from "./customfilter.module.css";
import { useNavigate } from "react-router-dom";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
function CustomFilter(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [value, setValue] = useState();
  const handleDateChange = (value) => {
    setValue(value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={props.open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem>
            <CustomLabel style={{ paddingLeft: "18px" }} label="From" />

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
          </MenuItem>
          <MenuItem>
            <CustomLabel style={{ paddingLeft: "18px" }} label="To" />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            </LocalizationProvider>
          </MenuItem>
          <MenuItem>
            <CustomLabel style={{ paddingLeft: "18px" }} label="To Time" />
            <TimePicker
              value={value}
              onChange={handleDateChange}
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
            <CustomLabel style={{ paddingLeft: "18px" }} label="To Time" />
            <TimePicker
              value={value}
              onChange={handleDateChange}
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
  );
}

export default CustomFilter;
