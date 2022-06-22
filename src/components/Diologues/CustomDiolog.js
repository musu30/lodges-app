import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import CustomLabel from "../CustomLabel";

import HouseIcon from "@mui/icons-material/House";

function CustomDiolog({ data, open }) {
  return (
    <Dialog
      //   onClose={handleClose}

      open={open}
      sx={{
        "& .MuiDialogContent-root": {
          border: "none",
        },
        "& .MuiDialog-paper": {
          maxWidth: "800px",
        },
        "& .MuiPaper-root": {
          background: "#00BEB9",
          borderRadius: "20px",
          //   minWidth:"800px"
        },
      }}
    >
      <DialogContent dividers>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "50px",
            paddingBottom: "50px",
            textAlign:"center"
    
          }}
        >
          <HouseIcon style={{ color: "white" }} />
          <Typography
            sx={{
              color: "white",
              // marginBottom: "8px",
              // marginTop: "8px",
              // marginLeft: "10px",
              margin: "8px",
            }}
          >
            {data}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDiolog;
