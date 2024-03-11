import React, { useEffect } from "react";
import Messages from "./Messages";
import NewMessagesInput from "./NewMessagesInput";
import { styled } from "@mui/system";
import { directChatHistory } from "../../realTimeCommunication/socketConnection";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerPage = ({ chosenChatDetails }) => {
  useEffect(() => {
    directChatHistory({ receiverId: chosenChatDetails.id });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessagesInput />
    </Wrapper>
  );
};

export default MessengerPage;
