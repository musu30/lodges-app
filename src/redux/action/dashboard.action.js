import * as types from "../type";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_DASHBOARD_DATA,
  payload: users,
});
export const loadDashBoardData = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        console.log("result is =>",res.data)
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log("error");
      });
  };
};
