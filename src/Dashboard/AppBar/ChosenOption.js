import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

const ChosenOption = ({ name }) => {
  return (
    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
      {name ? name : ""}
    </Typography>
  );
};

const mapStoreToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapStoreToProps)(ChosenOption);
