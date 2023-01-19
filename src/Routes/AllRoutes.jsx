import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Components/ProductPage/Products";
import HomePage from "../Components/HomePage/HomePage";
import ProductCard from "../Components/ProductPage/ProductCard";
import SignupCard from "../Cards/SignupCard";
import ProductDetails from "../Components/ProductPage/ProductDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<h1>123</h1>} />
      <Route path="/payment" element={<h1>123</h1>} />
      <Route path="/checkout" element={<h1>123</h1>} />
      <Route path="/signup" element={<SignupCard />} />
      <Route path="*" element={<h1>123</h1>} />
    </Routes>
  );
};

export default AllRoutes;
