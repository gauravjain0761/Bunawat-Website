import * as apiService from "../../services/API/api.service";
import { storeInstance } from "../../index";
import { toast } from "../../components/Toast/Toast";
import _constant from "../../_constant";
// import BASE_URL from "../../_constant/index";
import { logout } from "./user.action";

const CONSTNAT = _constant.TOKEN;

export const currencyPairAction = async (crypto) => {
  try {
    const response = await apiService.currencyPair(crypto);
    return response?.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const orderBookAction = async (pair) => {
  try {
    const response = await apiService.orderBook(pair);
    return response?.data;
  } catch (error) {
    console.log("error from orderBookAction", error);
  }
};

export const allSymbolsAction = async () => {
  try {
    const response = await apiService.allSymbols();
    return response?.data;
  } catch (error) {
    console.log("error from allSymbolsAction", error);
  }
};

export const placeOrderAction = async (pair, data) => {
  try {
    const response = await apiService.placeOrder(pair, data, getHeaders());
    if (response?.data?.status === 200) {
      toast.success(response?.data?.message);
      return response?.data;
    } else {
      toast.error(response?.data?.message);
      return response?.data;
    }
  } catch (error) {
    console.log("error from placeorderAction");
  }
};

export const recentTradeAction = async (pair) => {
  try {
    const response = await apiService.recentTrade(pair);
    if (response?.data?.status === 200) {
      return response?.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from recentTradeAction");
  }
};

export const getUserbalanceAction = async (coin, dispatch = null) => {
  try {
    const response = await apiService.getUserbalance(coin, getHeaders());
    if (response?.data?.status === 200) {
      return response?.data;
    } else if (response?.data?.status === 400) {
      // toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from getUserbalanceAction");
  }
};

export const getAllOrdersAction = async (coin, page, dispatch = null) => {
  try {
    const response = await apiService.getAllorders(coin, page, getHeaders());
    if (response?.data?.status === 200) {
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      // toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from getOrderHistoryAction");
  }
};

export const getCloseOrdersAction = async (pair, page) => {
  try {
    const response = await apiService.getCloseOrders(pair, page, getHeaders());
    if (response?.data?.status === 200) {
      return response?.data;
    } else {
      // toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from getCloseOrdersAction");
  }
};

export const getOpenOrderAction = async (pair, page, dispatch = null) => {
  try {
    const response = await apiService.getOpenOrders(pair, page, getHeaders());
    if (response?.data?.status === 200) {
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      // toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from getOpenOrderAction");
  }
};

export const getFavPairsAction = async (dispatch = null) => {
  try {
    const response = await apiService.getFavPairs(getHeaders());
    if (response?.data?.status === 200) {
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      // toast.error(response?.data?.message);
      return response?.data;
    }
  } catch (error) {
    console.log("error from getFavPairsAction", error);
  }
};

export const AddRemoveFavPairAction = async (pair, dispatch = null) => {
  try {
    const response = await apiService.AddRemoveFavPairs(pair, getHeaders());
    if (response?.data?.status === 200) {
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      // toast.error(response?.data?.message);
      return response?.data;
    }
  } catch (error) {
    console.log("error from AddRemoveFavPairAction");
  }
};

export const cancelOrdersAction = async (pair, dispatch = null) => {
  try {
    const response = await apiService.cancelOrders(pair, getHeaders());
    if (response?.data?.status === 200) {
      toast.success(response?.data?.message);
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from cancelOrders");
  }
};

export const cancelAllOrdersAction = async (pair, dispatch = null) => {
  try {
    const response = await apiService.cancelAllOrders(pair, getHeaders());
    if (response?.data?.status === 200) {
      toast.success(response?.data?.message);
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from cancelAllOrders");
  }
};

export const getOrderBalanceAction = async (data, dispatch = null) => {
  try {
    const response = await apiService.getOrderBalance(data, getHeaders());
    // console.log("Balance API Response : ",response)
    if (response?.data?.status === 200) {
      return response?.data;
    } else if (response?.data?.status === 400) {
      toast.error(response?.data?.message);
      if (dispatch) {
        dispatch(logout());
        // toast.info("you are logout");
        // history.push(BASE_URL.BASE_URL + "login");
        window.location.reload(false);
      }
      // history.push(BASE_URL.BASE_URL);
      return response?.data;
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    console.log("error from getOrderBalance");
  }
};

export const getHeaders = () => {
  let userToken = storeInstance.getState().user?.userData?.access_token;
  return {
    accesstoken: userToken,
    // "e71bccada8d4703538b91e627a48f1d3fbe50bde2cab47591d8845f1ab5d1bec1666871656",
    Token: CONSTNAT.TOKEN,
  };
};

export const allCoinsAction = async () => {
  try {
    const response = await apiService.allCoins();
    if (response?.data?.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log("error from allCoinsAction", err);
  }
};
