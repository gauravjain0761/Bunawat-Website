import React, { Component, useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages";
import { io } from "socket.io-client";

const App = () => {
  const [state, setState] = useState({ theme: "dark" });

  return (
    <>
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
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};
export default App;

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
