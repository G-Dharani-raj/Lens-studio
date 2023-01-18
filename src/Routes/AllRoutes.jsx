import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupCard from "../Cards/SignupCard";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<h1>123</h1>} />
			<Route path="/products" element={<h1>123</h1>} />
			<Route path="/product_detail" element={<h1>123</h1>} />
			<Route path="/cart" element={<h1>123</h1>} />
			<Route path="/payment" element={<h1>123</h1>} />
			<Route path="/checkout" element={<h1>123</h1>} />
			<Route path="/signup" element={<SignupCard/>} />
			<Route path="*" element={<h1>123</h1>} />
		</Routes>
	);
};

export default AllRoutes;
