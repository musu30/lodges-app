import Reducer from "./reducer";
import {combineReducers} from 'redux'
import guestReducer from "./guestInfo/guest.info.reducer";
import dashboardReducer from "./dashboard.reducer";
import reservationReducer from "./reservation.reducer";
import profileReducer from "./profile.reducer";


const RootReducer=combineReducers({
    reducer:Reducer,
    guestReducer:guestReducer,
    dashBoardReducer:dashboardReducer,
    reservationReducer:reservationReducer,
    profileReducer:profileReducer
});
export default RootReducer;