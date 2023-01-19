import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/Admin/admin.actions";
import { getRequestAPI } from "../../util/getRequestAPI";
import AdminProductCard from "./AdminProductCard";

const AdminProducts = () => {
	const { data } = useSelector((store) => store.adminManager);
	const dispatch = useDispatch();
	useEffect(() => {
		getData(dispatch);
	}, []);
	console.log(data);
	return (
		<>
			<SimpleGrid columns={{ base: 3, lg: 4, md: 2, sm: 1 }} gap={5}>
				{data.map((e) => {
					return <AdminProductCard key={e.id} {...e} />;
				})}
			</SimpleGrid>
			<AdminProductCard />
		</>
	);
};

export default AdminProducts;
