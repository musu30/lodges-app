import { MenuItem, Select } from "@mui/material";
import React from "react";

function CustomSelectValue(props) {
  console.log(props.muiOptions);
  return (
    <>
      {/* <FormControl sx={{ m: 1 }} variant="outlined"> */}
      <Select
        fullWidth
        variant="standard"
        disableUnderline
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        nooptionsmessage={props?.noOptionsMessage}
        onBlur={props.onBlur}
        name={props.name}
        sx={{
          "& .MuiInputBase-input": {
            //   "&:hover": {
            //     // border: "1px solid black",
            //   },
            borderRadius: props.borderRadius,
            position: "relative",
            border: props.border,
            fontSize: props.fontSize,
            width: props.width,
            padding: props.padding,
            background:"white!important"
          },
          borderRadius: props.borderRadius,
          
        }}
      >
        {props.muiOptions.map((option) => {
          return (
            <MenuItem
              sx={{ fontSize: props.optionFontSize }}
              value={option.value}
            >
              {option.value}
            </MenuItem>
          );
        })}
      </Select>
      {/* </FormControl> */}
    </>
  );
}

export default CustomSelectValue;
