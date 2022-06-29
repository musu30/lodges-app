import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./roomsection.module.css";

function RoomSection(props) {
  const [flag, setFlag] = useState(false);
  const [txtVal, setTxtVal] = useState("");
  return (
    <Grid item lg={6} md={6} sm={6}>
      <form>
        <Box>
          <Button variant="contained" id={styles.filterbutton}>
            {props.data.type}
          </Button>
        </Box>

        <Box
          style={{
            height: "20vh",
            backgroundColor: "white",
            width: "95%",
            overFlow: "scroll",
            marginBottom: "10px",
            border: "0.5px solid #7D86A9",
            borderRadius: "10px",
          }}
          onClick={(e) => {
            // handleClickEditable(e, blockIndex);
            console.log("the flag", flag);
            setFlag(true);
          }}
        >
          {props.data?.values.map((item, index) => {
            return (
              <TextField
                name={`name-.${index}`}
                sx={{
                  "& .MuiOutlinedInput-input": { height: "0px" },

                  "& .MuiInputBase-input": {},
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: 10,
                    color: "00B3AE",
                  },
                  "& .MuiOutlinedInput-input": {
                    height: "0px",
                    color: "#00B3AE",
                  },
                }}
                value={item.room__number}
                inputProps={{ maxLength: 3 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  border: "none",
                  borderColor: "coral",
                  width: "60px",
                  margin: "4px",
                  color: "00B3AE",
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
                onChange={(event) => {
                  event.stopPropagation();
                  props.handleChangeValue(event, props.blockIndex, index);
                }}
                onKeyDown={(event) => {
                  console.log("reached in child sec");
                  event.stopPropagation();
                  if (event.key === "Enter") {
                    props.handleToAddRoom(event, index);
                  }
                }}
                // inputRef={`name-.${index}`}
              />
            );
          })}
          {flag && (
            <TextField
              autoFocus
              // type='number'
              sx={{
                "& .MuiOutlinedInput-input": { height: "0px" },

                "& .MuiInputBase-input": {},
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: 0,
                  border: "none",
                },
              }}
              value={txtVal}
              inputProps={{ maxLength: 3 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "10px",
                border: "none",
                borderColor: "coral",
                width: "60px",
              }}
              onChange={(event) => {
                let onlyNums = event.target.value.replace(/[^0-9]/g, "");
                if (onlyNums) setTxtVal(event.target.value);
              }}
              onKeyDown={(event) => {
                console.log("reached in child sec");
                event.stopPropagation();
                if (event.key === "Enter" && event.target.value != "") {
                  props.handleToAddRoom(event, props.blockIndex);
                  setTxtVal("");
                }
              }}
            />
          )}
        </Box>
      </form>
    </Grid>
  );
}

export default RoomSection;
