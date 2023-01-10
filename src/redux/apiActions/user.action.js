import * as userSlice from "../reducers/user";
import * as userServices from "../../services/API/api.service";
// import { storeInstance } from "../../index";
import storage from "redux-persist/lib/storage";
import { toast } from "../../components/Toast/Toast";
import BASE_URL from "../../_constant/index";

export const loginAction = (userData, history) => async (dispatch) => {
  try {
    const response = await userServices.login(userData);
    if (response?.data?.status === 200) {
      toast.success("Login successfully");
      if (response?.data?.kyc === false) {
        toast.info(response?.data?.message);
      }
      await dispatch(userSlice.userLogin(response?.data?.data));
      history.push(BASE_URL.BASE_URL);
    } else {
      toast.error(response?.data?.message);
    }
  } catch (err) {
    console.log(" :: ERROR FROM loginAction", err);
    // toast.error(err.data.error.message);
  }
};

export const logout = () => async (dispatch) => {
  //await dispatch(userSlice.userLogin([]))
  await storage.removeItem("persist:root");
};
