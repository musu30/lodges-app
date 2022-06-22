import * as types from "../type";
const initialState = {

    loading:true,

  };
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOKING:
      return { ...state, data: action.payload, loading: false };

    default:
      return state;
  }
};
export default reservationReducer;