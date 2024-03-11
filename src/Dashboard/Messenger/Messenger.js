import React from "react";
import WelComePage from "./WelComePage";
import MessengerPage from "./MessengerPage";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393F",
  marginTop: "48px",
  display: "flex",
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelComePage />
      ) : (
        <MessengerPage chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStoreToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreToProps)(Messenger);
