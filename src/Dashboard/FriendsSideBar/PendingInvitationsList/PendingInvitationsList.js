import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const Dummy_INVITATIONS = [
  {
    _id: 1,
    senderId: {
      username: "Sam",
      mail: "sam@gmail.com",
    },
  },
  {
    _id: 2,
    senderId: {
      username: "Jigar",
      mail: "Jigar@gmail.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {Dummy_INVITATIONS.map((ele) => {
        return (
          <PendingInvitationsListItem
            key={ele._id}
            id={ele._id}
            username={ele.senderId.username}
            mail={ele.senderId.mail}
          />
        );
      })}
    </MainContainer>
  );
};

export default PendingInvitationsList;
