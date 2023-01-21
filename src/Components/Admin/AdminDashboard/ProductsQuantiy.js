import axios from "axios";

export const getQuantites = () => {
	let arr = [],
		obj = {};
	let square = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=square`
		)
		.then((res) => (obj["square"] = res.data.length));
	let round = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=round`
		)
		.then((res) => (obj["round"] = res.data.length));
	let rimless_round = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=rimless-round`
		)
		.then((res) => (obj["rimless_round"] = res.data.length));
	let rimless_rectangle = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=rimless-rectangle`
		)
		.then((res) => (obj["rimless_rectangle"] = res.data.length));
	let rimless_mixed = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=rimless-mixed`
		)
		.then((res) => (obj["rimless_mixed"] = res.data.length));
	let half_reem = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=half_reem`
		)
		.then((res) => (obj["half_reem"] = res.data.length));
	let computer = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=computer`
		)
		.then((res) => (obj["computer"] = res.data.length));
	let eyeglasses_mix = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=eyeglasses-mix`
		)
		.then((res) => (obj["eyeglasses_mix"] = res.data.length));
	let aviator = axios
		.get(
			`https://lazy-red-armadillo-garb.cyclic.app/all_Eyeglasses?category=aviator`
		)
		.then((res) => (obj["aviator"] = res.data.length));

	return obj;
};

/*
 * square
 * round
 * rimless-round
 * rimless-rectangle
 * rimless-mixed
 * half-reem
 * computer
 * eyeglasses-mix
 * aviator
 */
