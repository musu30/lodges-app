import * as types from "../type";
const initialState = {
  imgSrc: "",
  data: {
    name:"",
    contact:"",
    id:"",
    profile_image:"",
  },

  loading: true,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PROFILE_PHOTO:

      return { ...state, 
        // imgSrc: action.payload 
        data: {
            ...state.data,
            profile_image:action.payload
        },
        imgSrc:action.payload,
    };
    case types.GET_PROFILE_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
        imgSrc: action.payload.profile_image,
      };

    default:
      return state;
  }
};
export default profileReducer;
