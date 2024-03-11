import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Avatar from "../../shared/Component/Avatar";

const MainContainer = styled("div")({
  width: "98%",
  display: "column",
  marginTop: "10px",
});

const MessageHeader = ({ name }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h4"
        sx={{   
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        Start Your chat with {name}
      </Typography>
    </MainContainer>
  );
};

export default MessageHeader;
