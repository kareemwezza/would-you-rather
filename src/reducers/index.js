import { combineReducers } from "redux";

import getUsers from "./getUsers";
import authReducer from "./authReducer";
import questionsReducer from "./questionsReducer";

export default combineReducers({
  getUsers,
  authReducer,
  questionsReducer,
});
