import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import Appbar from "../../components/AppBar/Appbar";
import { loadDashBoardData } from "../../redux/action/dashboard.action";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDashBoardData());
    return () => {
      // cleanup
    };
  }, []);
  const { data, loading } = useSelector((state) => state.dashBoardReducer);

  const navigate = useNavigate();
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Box
          id={styles.mainbox}
          sx={{
            background: "rgba(0,0,0,0.42)",
          }}
          style={{
            marginTop: "62px",
            marginRight: "44px",
            marginBottom: "44px",
          }}
          flex={4}
        >
          <Appbar heading="DashBoard" />

          <Box
            sx={{
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Box id={styles.firstbox}>
                <img id={styles.camera} src="/images/icon_key.png" />
                <Typography sx={{ color: "#00B3AE" }}>
                  Available Rooms : {data?.room_stats?.available}
                </Typography>
              </Box>
              <Box id={styles.firstbox}>
                <img id={styles.camera} src="/images/icon_bed.png" />
                <Typography sx={{ color: "#00B3AE" }}>
                  Booked Rooms : {data?.room_stats?.reserved}
                </Typography>
              </Box>
              <Box id={styles.firstbox}>
                <img id={styles.camera} src="/images/icon_user_lock.png" />
                <Typography sx={{ color: "#00B3AE" }}>
                  Taken Rooms : {data?.room_stats?.occupied}
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ width: "100%", display: "flex", marginTop: "30px" }}>
              <Grid container spacing={2}>
                <Grid item sm={6} lg={6} md={6}>
                  <Box
                    id={styles.dahboardbox}
                    style={{
                      backgroundImage: `url(${"images/icon_dashboard_arrival.png"})`,
                    }}
                    onClick={() => {
                      navigate("/add-booking");
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography id={styles.dash_head}>ARRIVAL</Typography>
                      <List>
                        {!loading &&
                          data &&
                          data.stats.arrival.map((data, index) => (
                            <ListItem key={index}>
                              <Box
                                id={styles.firstbox}
                                style={{ paddingRight: "30px" }}
                              >
                                <Typography id={styles.dashboard_list_data}>
                                  {data.value}
                                </Typography>
                                <Typography id={styles.dashboard_list_data_date} >
                                  {data.date}
                                </Typography>
                              </Box>
                            </ListItem>
                          ))}
                      </List>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item sm={6} lg={6} md={6}>
                  <Box
                    id={styles.dahboardbox}
                    onClick={() => {
                      navigate("/departure");
                    }}
                    style={{
                      backgroundImage: `url(${"images/icon_dashboard_department.png"})`,
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography id={styles.dash_head}>DEPARTURE</Typography>
                      <List>
                        {!loading &&
                          data &&
                          data.stats.departure.map((data, index) => (
                            <ListItem
                              key={index}

                              // sx={{ color: "black", textAlign: "center" }}
                            >
                              <Typography id={styles.dashboard_list_data}>
                                {data.value}
                              </Typography>
                              <Typography id={styles.dashboard_list_data_date}>
                                {data.date}
                              </Typography>
                            </ListItem>
                          ))}
                      </List>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: "100%", display: "flex", marginTop: "30px" }}>
              <Grid container spacing={2}>
                <Grid item sm={6} lg={6}>
                  <Box
                    id={styles.dahboardbox}
                    style={{
                      backgroundImage: `url(${"images/icon_dashboard_reserve.png"})`,
                    }}
                    onClick={() => {
                      navigate("/room-reservation");
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography id={styles.dash_head}>RESERVE</Typography>
                      <List>
                        {!loading &&
                          data &&
                          data.stats.reserve.map((data, index) => (
                            <ListItem key={index}>
                              <Typography id={styles.dashboard_list_data}>
                                {data.value}
                              </Typography>
                              <Typography id={styles.dashboard_list_data_date}>
                                {data.date}
                              </Typography>
                            </ListItem>
                          ))}
                      </List>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item sm={6} lg={6}>
                  <Box
                    id={styles.dahboardbox}
                    style={{
                      backgroundImage: `url(${"images/icon_dashbboard_guest_info.png"})`,
                    }}
                    onClick={() => {
                      navigate("/guest-info");
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography id={styles.dash_head}>GUEST INFO</Typography>
                      <List>
                        {!loading &&
                          data &&
                          data.stats.guestInfo.map((data, index) => (
                            <ListItem key={index}>
                              <Typography id={styles.dashboard_list_data}>
                                {data.value}
                              </Typography>
                              <Typography id={styles.dashboard_list_data_date}>
                                {data.date}
                              </Typography>
                            </ListItem>
                          ))}
                      </List>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Dashboard;
