import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";

import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";
import { AllApiData } from "../services/api";
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(AllApiData.middleware),
});

setupListeners(store.dispatch)

export default store