import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UseAuth from "./CustomHook/UseAuth";

const PrivateRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, userDetails } = UseAuth();
  useEffect(() => {
    if (!isAuth) return navigate("/");
    // if (isAuth && userDetails.isAdmin) return children
    // else if (isAuth && userDetails?.isAdmin===false &&
    //     (location.pathname === '/admin' || location.pathname === '/admin/add' || location.pathname === '/admin/update' || location.pathname === '/admin/search'  || location.pathname === '/admin/users')) return navigate("/", "/")
  }, [isAuth]);

  return children;
};
export default PrivateRoute;

// && location.pathname === '/admin/add' && location.pathname === '/admin/update'  && location.pathname === '/admin/search' && location.pathname === '/admin/users'
