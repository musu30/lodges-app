import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CustomLabel from "../CustomLabel";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";

function DeleteTableDataDlg(props) {
  const heads = [
    "Name",
    "Mobile",
    "Purpose of Visit",
    "Occupation",
    "Arrived Date",
  ];
  const values = [
    "musu",
    "9544175926",
    "tour purpose",
    "softwarre engineer",
    "12/10/21",
  ];

  const StyledPaper = styled(Paper)(() => ({
    "& .MuiPaper-root": {
      background: "#white!important",
      borderRadius: "20px",
      //   minWidth:"800px"
    },
  }));

  return (
    <Dialog
      //   onClose={handleClose}

      open={props.open}
      sx={{
        "& .MuiDialogContent-root": {
          border: "none",
        },
        "& .MuiDialog-paper": {
          maxWidth: "800px",
        },
        "& .MuiPaper-root": {
          background: "#00BEB9",
          borderRadius: "20px",
          //   minWidth:"800px"
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <CustomLabel label="Are You want to delete the all items" />
        <IconButton
          aria-label="close"
          onClick={() => {
            props.setOpen(false);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "20px",
            marginRight: "20px",
            background: "white",
            borderRadius: "20px",
          }}
        >
          {/* <img
            style={{
              height: "30vh",
              width: "40vw",
              background: "green",
              position: "relative",
            }}
            src="/images/icon_close.png"
          /> */}

          {/* <WebcamCapture
            retake={retake}
            imageCallback={imageCallback}
            webcomponent={webcomponent}
            setRetake={setRetake}
          /> */}

          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Room</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map((row,index) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.guest}</TableCell>
                  <TableCell align="right">{row.room}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </DialogContent>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          paddingBottom: "25px",
          marginTop: "10px",
        }}
      >
        <Button
          onClick={() => {
            props.setOpen(false);
          }}
          variant="contained"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#00D5CF",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          //   onClick={() => {
          //     webcomponent.capture();
          //   }}
        >
          Delete
        </Button>
      </Stack>
    </Dialog>
  );
}

export default DeleteTableDataDlg;
