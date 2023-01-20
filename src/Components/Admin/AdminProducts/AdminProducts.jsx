import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataPerPage } from "../../../redux/Admin/admin.actions";
import AdminProductCard from "./AdminProductCard";

const AdminProducts = ({ currentPage }) => {
	const { data, getItems } = useSelector((store) => store.adminManager);
	const { loading, error } = getItems;
	const dispatch = useDispatch();
	useEffect(() => {
		getDataPerPage(dispatch, currentPage);
	}, [currentPage, dispatch]);

	if (loading) return <h1>Loading...</h1>;
	return (
		<>
			<SimpleGrid columns={{ base: 3, lg: 4, md: 2, sm: 1 }} gap={5}>
				{data.map((e) => {
					return (
						<AdminProductCard
							key={e.id}
							{...e}
							currentPage={currentPage}
						/>
					);
				})}
			</SimpleGrid>
		</>
	);
};

export default AdminProducts;
