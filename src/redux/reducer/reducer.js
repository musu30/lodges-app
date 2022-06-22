import { GET_DETAILS, POST_DETAILS } from "../type";

// export const GET_DETAILS="GET_DETAILS";
const initialState = {
  details: [],
  isResponse:false,
  // {
  //   id: 1,
  //   name: "sanjeev",
  //   email: "sanj@gmail.com",
  //   phone: "122323432",
  // },
  //   ],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { details: action.payload };
      case POST_DETAILS:
        return { isResponse:action.payload };
    default:
      return state;
  }
};
export default Reducer;
