import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../shared/Component/Avatar";
import OnlineIndicator from "./OnlineIndicator";
import { chatType, getActions } from "../../../store/actions/chatActions";
import { connect } from "react-redux";


const FriendListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleProfileClick = () => {
    setChosenChatDetails({ id: id, name: username }, chatType.DIRECT);
  };

  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textTransform: "none",
        position: "relative",
        color: "#000000",
      }}
      onClick={handleProfileClick}
    >
      <Avatar username={username} />
      <Typography
        style={{ marginLeft: "7px", fontWeight: 700, color: "#8E9297" }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionToProps)(FriendListItem);
