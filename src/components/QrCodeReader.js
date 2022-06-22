import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";

function QrCodeReader(props) {
  const [data, setData] = useState("No result");


  const capture = (result, error) => {
    if (!!result) {
      setData(result?.text);
    }

    if (!!error) {
      console.info(error);
    }
    props.setRetake(true);
  };

  const retake = () => {
    setData("");
    props.setRetake(false);
  };

  useEffect(() => {
    props.qrcodecomponent.capture = capture;
    props.qrcodecomponent.retake = retake;
  }, []);

  return (
    <Box >
      <QrReader onResult={capture} videoStyle={{
        height:"300"
      }}  />
      <p>{data}</p>
    </Box>
  );
}

export default QrCodeReader;
