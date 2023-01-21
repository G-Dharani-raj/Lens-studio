import axios from "axios";

export const getRequestPerPage = async (page) => {
	let res = await axios.get(
		`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?_limit=15&_page=${page}`
	);
	// console.log(res.data);
	return res.data;
};
