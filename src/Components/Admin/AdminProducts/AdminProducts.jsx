import React, { useEffect, useState } from "react";
import { getRequestAPI } from "../../util/getRequestAPI";

const AdminProducts = () => {
	const [data, setData] = useState([]);

	const getData = async () => {
		let result = await getRequestAPI();
		console.log(result);
		setData(result);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(data);
	return <></>;
};

export default AdminProducts;
