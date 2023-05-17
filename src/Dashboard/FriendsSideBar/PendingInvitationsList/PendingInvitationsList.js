import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const PendingInvitationsList = ({ pendingRequest }) => {
  return (
    <MainContainer>
      {pendingRequest?.map((ele) => {
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

const mapStoreStateToProp = ({ friends }) => {
  return {
    ...friends,
  };
};
export default connect(mapStoreStateToProp)(PendingInvitationsList);
