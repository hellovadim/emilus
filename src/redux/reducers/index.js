import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import userReducer from "./UserReducer";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  user: userReducer,
});

export default reducers;
