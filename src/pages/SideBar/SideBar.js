import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

function SideBar() {
  const [pos, setPos] = useState(0);
  const handleClick = (index) => {
    console.log("clicked", index);
    setPos(index);
  };

  const dashBoardData = [
    { label: "DashBoard", url: "/dashboard" },
    { label: "Reservations", url: "/dashboard" },
  ];
  return (
    <Box
      id={styles.mainbox}
      sx={{
        display: {
          xs: "none!important",
          // sm: "none!important",
          md: "block!important",
        },

        background: "rgba(0,0,0,0.42)",
      }}
      flex={1}
    >
      {/* <Toolbar /> */}
    
        <img id={styles.logo} src="/images/icon_logo.png" />
      
    
      <Divider />
      <List>
        {dashBoardData.map((data, index) => (
          <ListItem
            key={index}
            component={NavLink}
            // activeClassName={styles.active}
            exact="true"
            to={data.url}
            disablePadding
            sx={{
              color: "white",
              textAlign: "center",
              ...(pos === index && {
                backgroundColor: "#00BEB8",
                borderRadius: "0px 15px 15px 0px",
              }),
            }}
            onClick={() => handleClick(index)}
          >
            <ListItemButton>
              <ListItemText primary={data.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

// ["DashBoard", "Reservations", "Guest Info", "Drafts"]

export default SideBar;
