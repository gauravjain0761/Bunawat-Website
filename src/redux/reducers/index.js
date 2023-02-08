import { combineReducers } from "redux";
import { AllApiData } from "../../services/api";
import user from "./user";
import cart from "./cart";

const combinedReducer = combineReducers({
  [AllApiData.reducerPath]: AllApiData.reducer,
  user,
  cart
});

const rootReducer = (state, action) => {
  if (action.type === 'users/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
