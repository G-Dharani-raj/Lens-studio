import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupCard from "../Cards/SignupCard";
import Cart from "../Components/Cart/Cart";
import Checkout from "../Components/Checkout/Checkout";
import Shippings from "../Components/Checkout/Shippings";
import HomePage from "../Components/HomePage/HomePage";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Products from "../Components/ProductPage/Products";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<h1>123</h1>} />
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shipping" element={<Shippings />} />
      <Route path="*" element={<h1>123</h1>} />
    </Routes>
  );
};

export default AllRoutes;
