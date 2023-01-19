import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../Components/Admin";
import AdminAddPage from "../Components/Admin/AdminAddPage";
import HomePage from "../Components/HomePage/HomePage";
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/products" element={<h1>123</h1>} />
			<Route path="/product_detail" element={<h1>123</h1>} />
			<Route path="/cart" element={<h1>123</h1>} />
			<Route path="/payment" element={<h1>123</h1>} />
			<Route path="/checkout" element={<h1>123</h1>} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/admin/add" element={<AdminAddPage />} />
			<Route path="*" element={<h1>123</h1>} />
		</Routes>
	);
};

export default AllRoutes;
