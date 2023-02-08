import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages";
import './App.css';

const App = () => {
  const [state, setState] = useState({ theme: "dark" });

  let persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Route component={ScrollToTop} />
            <ThemeProvider
              value={{
                data: state,
                update: (themeVal) => {
                  setState({
                    theme: themeVal,
                  });
                },
              }}
            >
              <Index />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                theme="colored" />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
