import * as types from "../type";
import axios from "axios";

export const addProfilePicture = (data) => {
  return function (dispatch) {
    dispatch({
        type: types.ADD_PROFILE_PHOTO,
        payload: data,
      });
  };
};

export const getProfileData = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/profile`)
      .then((res) => {
        console.log("result is =>", res.data);
        dispatch({
          type: types.GET_PROFILE_DATA,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
};
