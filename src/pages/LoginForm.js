import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { blue, pink } from "@mui/material/colors";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../components/useFormHook/CustomTextField";

function LoginForm() {
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    id: yup.string().email().required("Required"),
    password: yup
      .string()
      .required("Password required")
      .min(8, "Password is too short - should be 8 chars minimum."),
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
    reset();
    console.log({ data });
    navigate("/dashboard");
  };

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const paperStyle = {
    margin: "20px auto",
    // height: "60vh",
    width: 300,
    background: "rgba(0,0,0,0.42)",
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 50,
    paddingBottom: 35,
    position: "absolute",
    right: "10vw",
    bottom: "40px",
  };

  return (
    <Grid sx={{ border: 1 }} container spacing={2}>
      <Paper elevation={3} style={paperStyle}>
        <Grid allign="center">
          <Typography
            varient="h2"
            sx={{
              color: "white",
              fontWeight: "600",
              marginBottom:5
            }}
          >
            Enter Your Employee Id
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          {/* <TextField
            sx={{
              marginTop: "20px",
              backgroundColor: "#FFFFFF",
              border: "0.5px solid #7D86A9",
              borderRadius: "10px",
            }}
            name="id"
            placeholder="ID"
            fullWidth
            {...register("id")}
 
          />
           */}
          <CustomTextField
            placeholder="ID"
            border="1px solid #707070"
            borderRadius="10px"
            height="0px"
            name="id"
            type="text"
            register={register}
          />
          <p style={{color:"white"}}>{errors.id?.message}</p>
          <CustomTextField
            placeholder="Password"
            border="1px solid #707070"
            borderRadius="10px"
            height="0px"
            name="password"
            type="password"
            register={register}
          />

          <p style={{color:"white"}}>{errors.password?.message}</p>
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
                  color:"00D5CF"
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
            sx={{ marginTop: "20px", backgroundColor: "#00D5CF",
            "&:hover": {
              backgroundColor: "white",
              color:"#00D5CF",
              fontWeight:"700"
            },
          
          }}
            fullWidth
            type="submit"
          >
            <Link href="#"></Link>
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default LoginForm;
