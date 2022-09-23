import { combineReducers } from "redux";
import userReducer from "./userReducer";
import jobsReducer from "./jobsReducer";

const reducers = combineReducers({
  user: userReducer,
  jobs: jobsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
