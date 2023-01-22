import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLoginCard from "../Cards/AdminLoginCard";
import { Admin } from "../Components/Admin";
import AdminAddPage from "../Components/Admin/AdminAddPage";
import HomePage from "../Components/HomePage/HomePage";
import Products from "../Components/ProductPage/Products";
import SignupCard from "../Cards/SignupCard";
import Cart from "../Components/Cart/Cart";
import Checkout from "../Components/Checkout/Checkout";
import Shippings from "../Components/Checkout/Shippings";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import AdminUpdatePage from "../Components/Admin/AdminUpdatePage";
import AdminSearchPage from "../Components/Admin/AdminSearchPage";
import Payment from "../Components/Checkout/Payment";
import AdminUsersPage from "../Components/Admin/AdminUsersPage";
import PrivateRoute from "../PrivateRoute";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/add"
        element={
          <PrivateRoute>
            <AdminAddPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/update"
        element={
          <PrivateRoute>
            <AdminUpdatePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/search"
        element={
          <PrivateRoute>
            <AdminSearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoute>
            <AdminUsersPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/adminlogin"
        element={
          <PrivateRoute>
            <AdminLoginCard />
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<SignupCard />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/shipping"
        element={
          <PrivateRoute>
            <Shippings />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>123</h1>} />
    </Routes>
  );
};

export default AllRoutes;
