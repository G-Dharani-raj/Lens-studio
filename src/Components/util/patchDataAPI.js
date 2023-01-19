import axios from "axios";

export const patchDataAPI = (id, payload) => {
	let res = axios.patch(
		`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses/${id}`,
		payload
	);
	console.log(res);
};
