import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomLabel from "../../components/CustomLabel";
import CustomTextField from "../../components/CustomTextField";
import styles from "./roomsettingsform.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function RoomSettingsForm() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    total_rooms: yup.number().required("Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data) => {
    data.height = 5.4;
    console.log("clicked submit data =>", data);
    reset();
  };
  return (
    <Box id={styles.mainbox} flex={4}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box>
            <Stack>
              <Box id={styles.firstbox}>
                <img
                  style={{ width: "14px", height: "24px" }}
                  src="/images/Icon_left_arrow.png"
                  onClick={(item) => {
                    navigate(-1);
                  }}
                />
                <CustomLabel
                  style={{ paddingLeft: "30px!important" }}
                  label="Manage Your Account"
                />
              </Box>
            </Stack>
            <Grid
              container
              spacing={3}
              style={{ paddingLeft: "10px", paddingTop: "20px" }}
            >
              <Grid item lg={12} md={12} sm={12}>
                <Box>
                  <CustomLabel label="Total Rooms" />

                  <CustomTextField
                    placeholder="total_rooms"
                    border="1px solid #707070"
                    borderRadius="10px"
                    height="0px"
                    name="total_rooms"
                    register={register}
                  />
                </Box>

                <Stack
                  direction="row"
                  sx={{
                    paddingTop: "40px",
                  }}
                  spacing={2}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "grey",
                    }}
                  >
                    CANCEL
                  </Button>
                  <Button type="submit" variant="contained">
                    SAVE
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Stack>
    </Box>
  );
}

export default RoomSettingsForm;
