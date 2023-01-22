import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UseAuth from "./CustomHook/UseAuth";

const AdminPrivateRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, userDetails } = UseAuth();
  console.log(userDetails);
  let isAdmin = JSON.parse(localStorage.getItem("admin"));
  console.log(isAdmin);
  if (isAdmin) return children;
  return navigate("/");
  // useEffect(() => {
  //   if (isAuth && userDetails.isAdmin) return children;
  // if (isAuth && !userDetails.isAdmin) return navigate("/");
  // if (!isAuth) return navigate("/");
  // else if (isAuth && userDetails?.isAdmin===false &&
  //     (location.pathname === '/admin' || location.pathname === '/admin/add' || location.pathname === '/admin/update' || location.pathname === '/admin/search'  || location.pathname === '/admin/users')) return navigate("/", "/")
  //    }, [isAuth])

  return children;
};
export default AdminPrivateRoute;

// && location.pathname === '/admin/add' && location.pathname === '/admin/update'  && location.pathname === '/admin/search' && location.pathname === '/admin/users'
