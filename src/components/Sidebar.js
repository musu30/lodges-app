import React from "react";
import {
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Sidebar() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        background: "rgba(0,0,0,0.42)",
        // backgroundColor: "#000000",

        marginLeft:2,
    zIndex:1,
        
            marginTop: "62px",
            marginBottom:"44px",
      }}
      flex={1}
    >
      <Box sx={{  color: 'white'}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon href="#">
                                <HomeIcon/>
                            </ListItemIcon> */}
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                                <DraftsIcon/>
                            </ListItemIcon> */}
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
