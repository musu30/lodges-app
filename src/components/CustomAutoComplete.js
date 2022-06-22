import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function CustomAutoComplete({
  width,
  radius,
  border,
  other,
  handleChange,
  options,
}) {
  return (
    <Autocomplete
      disablePortal
      sx={{
        "& .MuiOutlinedInput-input": { height: "0px" },

        "& .MuiInputBase-input": {},
        "& .MuiOutlinedInput-notchedOutline": {
        
          borderRadius: radius,
        },
        "& .MuiFormControl-root": {
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          borderRadius: radius,
        },
        width: width,
      }}
      options={options}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default CustomAutoComplete;
