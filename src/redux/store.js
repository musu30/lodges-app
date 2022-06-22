import RootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
