import { deleteDataAPI } from "../../Components/util/deleteDataAPI";
import { getRequestAPI } from "../../Components/util/getRequestAPI";
import { patchDataAPI } from "../../Components/util/patchDataAPI";
import { postDataAPI } from "../../Components/util/postDataAPI";
import {
	ADMIN_ADD_ERROR,
	ADMIN_ADD_LOADING,
	ADMIN_ADD_SUCCESS,
	ADMIN_DELETE_ERROR,
	ADMIN_DELETE_LOADING,
	ADMIN_DELETE_SUCCESS,
	ADMIN_GET_ERROR,
	ADMIN_GET_LOADING,
	ADMIN_GET_SUCCESS,
	ADMIN_UPDATE_ERROR,
	ADMIN_UPDATE_LOADING,
	ADMIN_UPDATE_SUCCESS,
} from "./admin.types";

export const getData = async (dispatch) => {
	dispatch({ type: ADMIN_GET_LOADING });
	try {
		let data = await getRequestAPI();
		// console.log(data);
		dispatch({ type: ADMIN_GET_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: ADMIN_GET_ERROR });
	}
};

export const updateData = async (dispatch, id, payload) => {
	dispatch({ type: ADMIN_UPDATE_LOADING });
	try {
		let data = await patchDataAPI(id, payload);
		dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: ADMIN_UPDATE_ERROR });
	}
};

export const addData = async (dispatch, payload) => {
	dispatch({ type: ADMIN_ADD_LOADING });
	try {
		let data = await postDataAPI(payload);
		dispatch({ type: ADMIN_ADD_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: ADMIN_ADD_ERROR });
	}
};

export const removeData = async (dispatch, id) => {
	dispatch({ type: ADMIN_DELETE_LOADING });
	try {
		let data = await deleteDataAPI(id);
		dispatch({ type: ADMIN_DELETE_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: ADMIN_DELETE_ERROR });
	}
};
