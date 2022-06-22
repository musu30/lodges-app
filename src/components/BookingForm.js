import React from "react";

import {
  Box,
  Button,
  Stack,
  Grid,
  Typography,
  Avatar,
  TextField,
} from "@mui/material";
import { green, pink } from "@mui/material/colors";
import { useForm, Form } from "./useForm";
import Controls from "../utils/controls/Controls";


function BookingForm() {
  
  const initialFValues = {
    id: 0,
    guestName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <Box
      sx={{
        background: "rgba(0,0,0,0.42)",
      }}
      style={{
        marginTop: "62px",
        marginRight: "44px",
        marginBottom: "44px",
        marginLeft: "44px",
      }}
      flex={4}
    >
      <Stack direction="row" spacing={2}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Box
                style={{
                  marginTop: "62px",
                  marginRight: "44px",
                  marginBottom: "44px",
                  marginLeft: "44px",
                }}
                flex={4}
              >
                <Typography
                  varient="h6"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    color: "white",
                  }}
                >
                  Online Friends
                </Typography>
                <Avatar sx={{ bgcolor: pink[500] }}>M</Avatar>
                <Typography
                  sx={{
                    color: "white",
                    height: "28px",
                  }}
                >
                  Name
                </Typography>
                <Controls.Input
                  name="guestName"
                  label="Guest Name"
                  value={values.guestName}
                  onChange={handleInputChange}
                  error={errors.guestName}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box
                style={{
                  marginTop: "62px",
                  marginRight: "44px",
                  marginBottom: "44px",
                  marginLeft: "44px",
                }}
                flex={4}
              >
                <Typography
                  varient="h6"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    color: "white",
                  }}
                >
                  Online Friends
                </Typography>
                <Avatar sx={{ bgcolor: pink[500] }}>M</Avatar>
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    color: "white",
                    height: "28px",
                  }}
                >
                  Name
                </Typography>
                <TextField
                  name="dfd"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    border: "0.5px solid #7D86A9",
                    borderRadius: "10px",

                    minWidth: "61px",
                  }}
                  // style={{height:"26px"}}
                  placeholder="Guest Name"
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>
        </Form>
      </Stack>
    </Box>
  );
}

export default BookingForm;
