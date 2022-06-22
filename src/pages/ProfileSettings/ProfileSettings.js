import { Box, Button, Divider, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel";
import styles from "./profilesettings.module.css";
import EditIcon from "@mui/icons-material/Edit";
import CustomTextField from "../../components/CustomTextField";
import Appbar from "../../components/AppBar/Appbar";
function ProfileSettings() {
  const navigate = useNavigate();
  const [openProf, setOpenProf] = useState(false);
  const [openRsrv, setOpenRsrv] = useState(false);
  return (
    <Box id={styles.mainbox}>
      <Box style={{ paddingTop: "12px" }}>
        <Appbar />
      </Box>

      <Grid container spacing={3} style={{ paddingLeft: "12px",paddingRight: "12px" }}>
        <Grid item lg={5} md={5} sm={5}>
          <Box id={styles.firstbox}>
            <img
              style={{ width: "14px", height: "24px" }}
              src="/images/Icon_left_arrow.png"
              onClick={(item) => {
                navigate(-1);
              }}
            />
            <CustomLabel
              style={{ paddingLeft: "18px" }}
              label="Profile Setting"
            />

            <EditIcon
               sx={{ marginLeft: "10px" ,  color:"white"}}
            
              onClick={() => {
                setOpenProf(!openProf);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="Name" />
            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Employee Id" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Contact" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Change Password" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          {openProf && (
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
                // disabled={!retake}
                // sx={{
                //   color: "white",
                // }}
                variant="contained"
                // onClick={() => {
                //   webcomponent.retake();
                // }}
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
                // onClick={() => {
                //   webcomponent.capture();
                // }}
              >
                Save
              </Button>
            </Stack>
          )}
        </Grid>
        <Grid item lg={2} md={2} sm={2}>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ marginRight: "-1px" }}
          />
        </Grid>

        <Grid item lg={5} md={5} sm={5}>
          <Box id={styles.firstbox}>
            <img
              style={{ width: "14px", height: "24px", "&:hover": {
                cursor: "pointer!important"
              }}}
              src="/images/Icon_left_arrow.png"
              onClick={(item) => {
                navigate(-1);
              }}
            />
            <CustomLabel
              style={{
                paddingLeft: "18px",
                marginLeft: "10px!important",
                marginRight: "10px",
              }}
              label="Reception Id Setting"
            />

            <EditIcon
              sx={{ marginLeft: "10px" ,  color:"white"}}
            
              onClick={() => {
                setOpenRsrv(!openRsrv);
              }}
            />
          </Box>

          <Box>
            <CustomLabel label="Name" />
            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Employee Id" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Contact" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          <Box>
            <CustomLabel label="Change Password" />

            <CustomTextField
              placeholder="name"
              border="1px solid #707070"
              borderRadius="10px"
              height="0px"
            />
          </Box>
          {openRsrv && (
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
                // disabled={!retake}
                // sx={{
                //   color: "white",
                // }}
                variant="contained"
                // onClick={() => {
                //   webcomponent.retake();
                // }}
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
                // onClick={() => {
                //   webcomponent.capture();
                // }}
              >
                Save
              </Button>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileSettings;
