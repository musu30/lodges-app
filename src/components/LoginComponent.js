import { Grid, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { pink, blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

function LoginComponent() {
  const [checked, setChecked] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const handleRegistration = (data) => {
    console.log("reached here");
    console.log(data);
  };
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const paperStyle = {
    margin: "20px auto",

    height: "60vh",
    width: 320,
    backgroundColor: "#707070",
    paddingRight: 90,
    paddingLeft: 90,
    paddingTop: 20,
    position: "absolute",
    right: "10vw",
    bottom: 0,
  };

  return (
    <Grid container spacing={2}>
      <Paper elevation={3} style={paperStyle}>
        <Grid allign="center">
          <h2>Enter Your Employee Id </h2>
        </Grid>

        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <TextField
            sx={{
              marginTop: "20px",
              backgroundColor: "#FFFFFF",
              border: "0.5px solid #7D86A9",
              borderRadius: "10px",
            }}
            placeholder="ID"
            fullWidth
            {...register("name", registerOptions.name)}
          />

          <TextField
            sx={{
              marginTop: "20px",
              backgroundColor: "#FFFFFF",
              border: "0.5px solid #7D86A9",

              borderRadius: "10px",
            }}
            type="password"
            // variant="standard"
            placeholder="Password"
            fullWidth
            {...register("password", registerOptions.password)}
          />
          <Stack
            sx={{ marginTop: "20px" }}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography
              sx={{
                paddingTop: 1,
              }}
            >
              <Link
                href="#"
                sx={{
                  fontSize: 13,
                }}
              >
                Forgot Password
              </Link>
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: pink[600],
                      fontSize: 13,
                    },
                  }}
                />
              }
              label="Remember me?"
            />
          </Stack>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", backgroundColor: "#00D5CF" }}
            fullWidth
          >
            <Link href="#"></Link>
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default LoginComponent;
