import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function RoomSection(props) {
  const [flag, setFlag] = useState(false);
  const [txtVal, setTxtVal] = useState("");
  return (
    <Grid item lg={6} md={6} sm={6}>
      <form>
        <Box
          style={{
            height: "120px",
            backgroundColor: "white",
            width: "95%",
            overFlow: "visible",
            marginBottom: "10px",
          }}
          onClick={(e) => {
            // handleClickEditable(e, blockIndex);
            console.log("the flag", flag);
            setFlag(true);
          }}
        >
          <Typography
            sx={{
              color: "black",
              // marginBottom: "8px",
              // marginTop: "8px",
              // marginLeft: "10px",
              margin: "8px",
            }}
          >
            {props.data.type}
          </Typography>
          {props.data?.values.map((item, index) => {
            return (
              <TextField
                name={`name-.${index}`}
                sx={{
                  "& .MuiOutlinedInput-input": { height: "0px" },

                  "& .MuiInputBase-input": {},
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: 10,
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
              onChange={(event)=>{
                setTxtVal(event.target.value)
              }}
              onKeyDown={(event) => {
                console.log("reached in child sec");
                event.stopPropagation();
                if (event.key === "Enter" && event.target.value!="") {
                  props.handleToAddRoom(event,  props.blockIndex);
                  setTxtVal("")
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
