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
import AdminPrivateRoute from "../AdminPrivateRoute";
import AdminDashboard from "../Components/Admin/AdminDashboard";
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
          <AdminPrivateRoute>
            <AdminDashboard />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminPrivateRoute>
            <Admin />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/add"
        element={
          <AdminPrivateRoute>
            <AdminAddPage />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/update"
        element={
          <AdminPrivateRoute>
            <AdminUpdatePage />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/search"
        element={
          <AdminPrivateRoute>
            <AdminSearchPage />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminPrivateRoute>
            <AdminUsersPage />
          </AdminPrivateRoute>
        }
      />
      <Route
        path="/adminlogin"
        element={
          <AdminPrivateRoute>
            <AdminLoginCard />
          </AdminPrivateRoute>
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
