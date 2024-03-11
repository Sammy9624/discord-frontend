import React from "react";
import { Box } from "@mui/material";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3AB55D",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecord />
    </Box>
  );
};

export default OnlineIndicator;
