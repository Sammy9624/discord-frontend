import React, { useState } from "react";
import { connect } from "react-redux";
import { styled } from "@mui/system";
import { sendDirectMessage } from "../../realTimeCommunication/socketConnection";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  height: "98%",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
  width: "70%",
  minWidth: "300px",
  outline: "none",
});

const NewMessagesInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");

  const onMessageType = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim().length > 0) {
      sendDirectMessage({
        receiverId: chosenChatDetails?.id,
        content: message,
      });
    }
    setMessage("");
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Start conversation with ${chosenChatDetails?.name}`}
        value={message}
        onChange={onMessageType}
        onKeyDown={onEnter}
      />
    </MainContainer>
  );
};

const mapStoreToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreToProps)(NewMessagesInput);
