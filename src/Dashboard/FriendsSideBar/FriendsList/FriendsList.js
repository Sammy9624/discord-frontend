import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});
const FriendsList = ({ friends, onlineUsers }) => {
  const friendList = friends.map((f) => {
    f.online = !!onlineUsers.find((user) => f.id === user.userId);
    return f;
  });

  const onlineFirst = friendList.sort((a, b) => b.online - a.online);
  return (
    <MainContainer>
      {onlineFirst?.map((ele) => {
        return (
          <FriendListItem
            isOnline={ele.online}
            id={ele.id}
            username={ele.username}
            key={ele.id}
          />
        );
      })}
    </MainContainer>
  );
};

const mapStoreToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreToProps)(FriendsList);
