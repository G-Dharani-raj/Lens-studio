import { legacy_createStore, compose, combineReducers } from "redux";
import { CARTReducer } from "../Components/Cart/CartRedux/CartReducer";
import { adminReducer } from "./Admin/admin.reducer";

const rootReducer = combineReducers({
  adminManager: adminReducer,
  cartManager: CARTReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancer());
