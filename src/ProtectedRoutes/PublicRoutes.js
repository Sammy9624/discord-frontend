import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  const userDetails = localStorage.getItem("user");
  return !userDetails ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
