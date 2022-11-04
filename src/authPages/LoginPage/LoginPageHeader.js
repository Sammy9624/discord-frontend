import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "#FFFFFF" }}>
        Welcome Back!
      </Typography>
      <Typography sx={{ color: "#B9BBBE" }}>
        We are happy that you are with us!
      </Typography>
    </>
  );
};

export default LoginPageHeader;
