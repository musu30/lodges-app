import { Typography } from "@mui/material";
import React from "react";

function CustomLabel({ label }) {
  return (
    <Typography
      sx={{
        color: "white",
        // marginBottom: "8px",
        // marginTop: "8px",
        // marginLeft: "10px",
        margin:"8px"
      }}
    >
      {label}
    </Typography>
  );
}

export default CustomLabel;
