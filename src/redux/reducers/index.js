import { combineReducers } from "redux";
import { AllApiData } from "../../services/api";
import user from "./user";

export default combineReducers({
  [AllApiData.reducerPath]: AllApiData.reducer,
  user,
});
