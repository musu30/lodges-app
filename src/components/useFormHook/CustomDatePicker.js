import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";

function CustomDatePicker(props) {
  const [value, setValue] = useState(props.value);
  const handleDateChange = (value) => {
    setValue(value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        inputFormat={props.inputFormat}
        value={props.value}
        onChange={handleDateChange}
        {...props.register(props.name)}

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
  );
}

export default CustomDatePicker;
