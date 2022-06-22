import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import Bookings from "../components/Bookings";

function DashboardPage() {
  return (
    <Box >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg') ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // height: "100%",
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },

            background: "rgba(0,0,0,0.42)",
          }}
          style={{
            marginTop: "62px",
            marginRight: "44px",
            marginBottom: "44px",
            // width: "936px",
          }}
          flex={4}
        >
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Box
              sx={{
                top: "167px",
                left: "755px",
                backgroundColor: "#808080",
                height: "199px",
                width: "195px",
                border: "1px solid #707070",
                borderRadius: "20px",
                marginLeft: "99px",
                "&:hover": {
                  backgroundColor: "green",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Typography
                varient="h6"
                sx={{
                  color: "white",
                }}
              >
                Available rooms
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#808080",
                height: "199px",
                width: "195px",
                border: "1px solid #707070",
                borderRadius: "20px",
                marginLeft: "369px",
                "&:hover": {
                  backgroundColor: "green",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Typography
                varient="h6"
                sx={{
                  color: "white",
                }}
              >
                Booked Rooms
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#808080",
                height: "199px",
                width: "195px",
                border: "1px solid #707070",
                borderRadius: "20px",
                marginLeft: "640px",
                "&:hover": {
                  backgroundColor: "green",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <Typography
                varient="h6"
                sx={{
                  color: "white",
                }}
              >
                Rooms Occupied
              </Typography>
            </Box>
          </Stack>

          <Bookings />
        </Box>

        {/* <Feed /> */}
      </Stack>
    </Box>
  );
}

export default DashboardPage;
