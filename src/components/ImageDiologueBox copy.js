import { Box, Button, Stack, Typography } from "@mui/material";

import React from "react";

function ImageDiologueBox() {
  return (
    <Box
      style={{
       
        height: "357px",
        width: "497px",
        background: "yellow",
        borderRadius: "5px"
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography sx={{ color: "white" }}>Take Photo</Typography>
        <img  src="/images/icon_close.png" />
      </Stack>
      <Box>
        <img
          style={{
           
            height: "230px",
            width: "440px",
            background: "green",
          }}
          src="/images/icon_close.png"
        />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained">Retake</Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </Box>
  );
}

export default ImageDiologueBox;
