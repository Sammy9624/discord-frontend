import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import DashBoard from "./Dashboard/DashBoard";
import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import AlertNotification from "./shared/Component/AlertNotification";
import PublicRoutes from "./ProtectedRoutes/PublicRoutes";
import PageNotFound from "./shared/Component/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}

export default App;
