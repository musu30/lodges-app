import * as types from "../type";
const initialState = {
    data: [],
    loading:true,
    // {
    //   id: 1,
    //   name: "sanjeev",
    //   email: "sanj@gmail.com",
    //   phone: "122323432",
    // },
    //   ],
  };
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DASHBOARD_DATA:
      return { ...state, data: action.payload, loading: false };

    default:
      return state;
  }
};
export default dashboardReducer;
