import React, { Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookingForm from "./pages/Booking_form/BookingForm";
import RoomSettingsForm from "./pages/room_settings/RoomSettingsForm";
import ProfileSettings from "./pages/ProfileSettings/ProfileSettings";
import axios from "axios";
function App() {
  const [loader, setLoader] = useState(false);
  const loading = (
    <div className="loader">
    </div>
  );
  // For GET requests
  //  axios.interceptors.request.use(
  //   (req) => {
  //     setLoader(true)
  //     return req;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  // // For POST requests
  // axios.interceptors.response.use(
  //   (res) => {
  //     // Add configurations here
  //     if (res.status === 201) {
  //       console.log("Posted Successfully");
  //     }
  //     setLoader(false)
  //     return res;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  // Pages
  const LoginForm = React.lazy(() => import("./pages/LoginForm"));
  const DashboardPage = React.lazy(() => import("./pages/DashBoard/Dashboard"));
  const GuestInfoPage = React.lazy(() => import("./pages/GuestInfo/GuestInfo"));
  const ReservationPage = React.lazy(() =>
    import("./pages/Reservation/ReservationForm")
  );
  const DeparturePage = React.lazy(() => import("./pages/Departure/DepartureForm"));
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route
            exact
            path="/login"
            name="Login Page"
            element={<LoginForm />}
          />
           <Route
            exact
            path="/"
            name="Login Page"
            element={<LoginForm />}
          />
          <Route
            exact
            path="/dashboard"
            name="Dashboard"
            element={<DashboardPage />}
          />

          <Route
            exact
            path="/add-booking"
            name="BookingForm"
            element={<BookingForm />}
          />

          <Route
            exact
            path="/guest-info"
            name="GuestInfo"
            element={<GuestInfoPage />}
          />
          <Route
            exact
            path="/room-setting"
            name="RoomSettings"
            element={<RoomSettingsForm />}
          />
          <Route
            exact
            path="/profile-settings"
            name="ProfileSettings"
            element={<ProfileSettings />}
          />
          <Route
            exact
            path="/room-reservation"
            name="RoomReservation"
            element={<ReservationPage />}
          />
          <Route
            exact
            path="/departure"
            name="Departure"
            element={<DeparturePage />}
          />
        </Routes>
        
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
