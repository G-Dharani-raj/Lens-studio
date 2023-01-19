import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Shippings from "../components/Checkout/Shippings";
import HomePage from "../components/HomePage/HomePage";
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage/>} />
			<Route path="/products" element={<h1>123</h1>} />
			<Route path="/product_detail" element={<h1>123</h1>} />
			<Route path="/cart" element={<h1>123</h1>} />
			<Route path="/payment" element={<h1>123</h1>} />
			<Route path="/checkout" element={<Checkout/>} />
			<Route path="/shipping" element={<Shippings/>} />
			<Route path="*" element={<h1>123</h1>} />
		</Routes>
	);
};

export default AllRoutes;
