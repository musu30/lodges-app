import { OutlinedInput } from "@mui/material";
import React from "react";

function CustomTextField({
  borderRadius,
  height,
  name,
  border,
  type,
  // inputprops,
    register,
    handleChange,
  other
}) {
  return (
    <OutlinedInput
    type={type}
    name={name}
    fullWidth
      sx={{
        "& .MuiOutlinedInput-input": { height: height },

        "& .MuiInputBase-input": {},
        "& .MuiOutlinedInput-notchedOutline": {
          border: border,
          borderRadius: borderRadius,
        },
      }}
      style={{
        background: "#FFFFFF",
        borderRadius: "10px",
        border: "none",
        borderColor: "coral",
      }}
      onChange={handleChange}
      // {...other}
      // InputProps={inputprops}
    //  {...register(name)}
    />
  );
}




export default CustomTextField;
