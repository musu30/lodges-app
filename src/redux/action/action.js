// import { GET_DETAILS, POST_DETAILS } from "../type";
// import { getApiDetails, postApiDetails } from "../../api/apiRequest";

// const getApiaction = () => {
//   return function (dispatch) {
//     return getApiDetails().then((res) => {
//       console.log("data 1===>", res.data);

//       dispatch({
//         type: GET_DETAILS,
//         payload: res.data,
//       });
//     });
//   };
// };
// const postApiaction = (req) => {
//   return function (dispatch) {
//     dispatch({
//       type: POST_DETAILS,
//       payload: false,
//     });
//     return postApiDetails(req).then((res) => {
//       console.log("data 2===>", res.data);
//       dispatch({
//         type: POST_DETAILS,
//         payload: true,
//       });
//     });
//   };
// };
// export  { postApiaction, getApiaction };

import * as types from "../type";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.API_URL}`)
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log("error");
      });
  };
};
