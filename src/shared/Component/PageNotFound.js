import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const Wrapper = styled("div")({
    background: "#5865f2",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "350px",
  });
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "700",
          color: "#FFFFFF",
        }}
      >
        Something is wrong.
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "500",
          color: "#FFFFFF",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        onClick={() => navigate("/")}
      >
        We must have misplaced that page.Take me home!
      </Typography>
    </Wrapper>
  );
};

export default PageNotFound;
