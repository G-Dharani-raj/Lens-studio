import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
 import PrductContext from "./Context/PrductContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ChakraProvider>
			<PrductContext>			
			<Provider store={store}>
				<App />
			</Provider>
			</PrductContext>
		</ChakraProvider>
	</BrowserRouter>
);
