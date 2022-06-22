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
  placeholder
}) {
  return (
    <OutlinedInput
    type={type}
    name={name}
    placeholder={placeholder}
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
      // InputProps={inputprops}
     {...register(name)}
    />
  );
}




export default CustomTextField;
