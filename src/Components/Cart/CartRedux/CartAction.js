import { deleteDataAPI } from "../CartUtils/deleteDataAPI";
import { getRequestAPI } from "../CartUtils/getRequestAPI";
import { patchDataAPI } from "../CartUtils/patchDataAPI";
import { postDataAPI } from "../CartUtils/postDataAPI";
import {
  CART_ADD_ERROR,
  CART_ADD_LOADING,
  CART_ADD_SUCCESS,
  CART_DELETE_ERROR,
  CART_DELETE_LOADING,
  CART_DELETE_SUCCESS,
  CART_GET_ERROR,
  CART_GET_LOADING,
  CART_GET_SUCCESS,
  CART_UPDATE_ERROR,
  CART_UPDATE_LOADING,
  CART_UPDATE_SUCCESS,
} from "./CartActionType";

export const getCartData = async (dispatch) => {
  dispatch({ type: CART_GET_LOADING });
  try {
    let data = await getRequestAPI();
    // console.log(data);
    dispatch({ type: CART_GET_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CART_GET_ERROR });
  }
};

export const updateCartData = async (dispatch, id, payload) => {
  dispatch({ type: CART_UPDATE_LOADING });
  try {
    let data = await patchDataAPI(id, payload);
    console.log(data);
    dispatch({ type: CART_UPDATE_SUCCESS});
  } catch (e) {
    dispatch({ type: CART_UPDATE_ERROR });
  }
};

export const removeCartData = async (dispatch, id) => {
  dispatch({ type: CART_DELETE_LOADING });
  try {
    let data = await deleteDataAPI(id);
    console.log(data);
    dispatch({ type: CART_DELETE_SUCCESS });
  } catch (e) {
    dispatch({ type: CART_DELETE_ERROR });
  }
};
