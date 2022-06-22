import * as types from "../type";
import axios from "axios";
const getUsers = (users) => ({
  type: types.ADD_BOOKING,
  payload: users,
});

export const addBooking = (data) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/booking`, data)
      .then((res) => {
        console.log("added successfully");
        dispatch({
          type: types.ADD_BOOKING,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
};
