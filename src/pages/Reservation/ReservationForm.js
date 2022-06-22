import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../../components/AppBar/Appbar";
import CustomLabel from "../../components/CustomLabel";
import styles from "./reservationform.module.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import reservationReducer from "../../redux/reducer/reservation.reducer";
import CustomTextField from "../../components/useFormHook/CustomTextField";
import CustomDatePicker from "../../components/useFormHook/CustomDatePicker";
import { addBooking } from "../../redux/action/reservation.action";
import CustomDiolog from "../../components/Diologues/CustomDiolog";

function ReservationForm() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    mobile: yup
      .number()
      .required("Password required")
      .min(10, "mobile is too short - should be 8 chars minimum."),
    no_of_rooms: yup.number().required("Required"),

    date_of_arrival: yup.string().required("Date of arrival required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();
  
    // const { loading } = useSelector((state) => state.reservationReducer);

  const onSubmitHandler = (data) => {
    console.log("clicked submit data =>", data);

    dispatch(addBooking(data));

    // if (!loading) {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      reset();
      navigate(-1);
    }, 3000);

    // }
  };

  return (
    <Box id={styles.mainbox}>
      <Appbar />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container spacing={3} style={{ paddingLeft: "10px" }}>
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
                label="Room Reservation"
              />
            </Box>

            <Box>
              <CustomLabel label="Name" />
              <CustomTextField
                placeholder="name"
                border="1px solid #707070"
                borderRadius="10px"
                height="0px"
                name="name"
                type="text"
                register={register}
              />
            </Box>
            <Box>
              <CustomLabel label="Mobile" />

              <CustomTextField
                placeholder="name"
                border="1px solid #707070"
                borderRadius="10px"
                height="0px"
                name="mobile"
                type="number"
                register={register}
              />
            </Box>

            <Box>
              <CustomLabel label="Number of Room" />

              <CustomTextField
                placeholder="name"
                border="1px solid #707070"
                borderRadius="10px"
                height="0px"
                name="no_of_rooms"
                type="number"
                register={register}
              />
            </Box>
            <Box>
              <CustomLabel label="Date Of Arrival" />
              <CustomDatePicker
                value={selectedDate}
                name="date_of_arrival"
                register={register}
                inputFormat="MM/dd/yyyy"
              />
            </Box>
          </Grid>
        </Grid>
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
            variant="contained"
            onClick={() => {
              reset();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              background: "#00D5CF",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Book
          </Button>
        </Stack>
      </form>
      <CustomDiolog data="Booking Successful !!!" open={open} />
    </Box>
  );
}

export default ReservationForm;
