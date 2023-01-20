import axios from "axios";

export const deleteDataAPI = (id) => {
	let res = axios.delete(
		`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses/${id}`
	);
	console.log(res);
};
