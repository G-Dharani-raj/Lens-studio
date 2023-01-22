import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PrductContext from "./Context/PrductContext";
import AuthContextProvider from "./AuthContext/AuthContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <PrductContext>
          <Provider store={store}>
            <App />
          </Provider>
        </PrductContext>
      </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvider>
);
