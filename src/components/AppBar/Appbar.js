import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomLabel from "../CustomLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../../redux/action/profile.action";

function Appbar(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  useEffect(() => {
    dispatch(getProfileData());
    return () => {
      // cleanup
    };
  }, []);
  const { data, loading, imgSrc } = useSelector(
    (state) => state.profileReducer
  );
  console.log("data is ----->", data);



  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = () => {
    const finalData = {
      name: "musammil",
      email: "test@gmail.com",
    };
    // dispatch(postApiaction(finalData))
  };

  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        style={{marginLeft:"20px",marginRight:"25px",marginBottom:"25px",marginTop:"15px"}}
      >
      
        {props.heading != undefined ? (
           <Typography
           sx={{
             color: "white",
             fontWeight:"700",
             margin:"8px"
           }}
         >
           {props.heading}
         </Typography> 
        ) : (
          <CustomLabel label=" " />
        )}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, marginRight: "10px", marginTop: "10px" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {data.profile_image === "" ? (
              <Avatar sx={{ width: 32, height: 32 }}>{name}</Avatar>
            ) : (
              <img
                style={{ width: "18px", height: "15px" }}
                src={data.profile_image}
              />
            )}
          </IconButton>
        </Tooltip>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
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
            color: "#00D5CF",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={(item) => {
            navigate("/profile-settings");
          }}
        >
          <SettingsIcon color="blue" />
          Manage Your account
        </MenuItem>
        <MenuItem
          onClick={(item) => {
            navigate("/room-setting");
          }}
        >
          <RoomPreferencesIcon color="blue" />
          Room Settings
        </MenuItem>
        <MenuItem
          onClick={(item) => {
            navigate("/login");
          }}
        >
          <LogoutIcon color="blue" />
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Appbar;
