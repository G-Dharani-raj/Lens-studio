import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import AdminLoginCard from "../Cards/AdminLoginCard";
import SignupCard from "../Cards/SignupCard";
import Admin from "../Components/Admin/Admin";
import HomePage from "../Components/HomePage/HomePage";
=======
>>>>>>> 56a8c361048a5b443ddcc87940b230948eecb82d

import { Admin } from "../Components/Admin";
import AdminAddPage from "../Components/Admin/AdminAddPage";
import HomePage from "../Components/HomePage/HomePage";
import Products from "../Components/ProductPage/Products";
import ProductCard from "../Components/ProductPage/ProductCard";
import SignupCard from "../Cards/SignupCard";
import Checkout from "../Components/Checkout/Checkout";
import Shippings from "../Components/Checkout/Shippings";
import ProductDetails from "../Components/ProductPage/ProductDetails";
const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
<<<<<<< HEAD
			<Route path="/products" element={<h1>123</h1>} />
			<Route path="/product_detail" element={<h1>123</h1>} />
			<Route path="/cart" element={<h1>123</h1>} />
			<Route path="/payment" element={<h1>123</h1>} />
			<Route path="/checkout" element={<h1>123</h1>} />
			<Route path="/signup" element={<SignupCard/>} />
			<Route path="/adminlogin" element={<AdminLoginCard/>} />
			<Route path="/admin" element={<Admin/>} />
=======
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<ProductDetails />} />
			<Route path="/cart" element={<h1>123</h1>} />
			<Route path="/payment" element={<h1>123</h1>} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/admin/add" element={<AdminAddPage />} />
			<Route path="/signup" element={<SignupCard />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/shipping" element={<Shippings />} />
>>>>>>> 56a8c361048a5b443ddcc87940b230948eecb82d
			<Route path="*" element={<h1>123</h1>} />
		</Routes>
	);
};

export default AllRoutes;
