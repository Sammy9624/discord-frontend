import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";

const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "Jigar",
    isOnline: true,
  },
  {
    id: 2,
    username: "Nidhi",
    isOnline: false,
  },
  {
    id: 3,
    username: "Sam",
    isOnline: false,
  },
  {
    id: 4,
    username: "Mark",
    isOnline: true,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});
const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((ele) => {
        return (
          <FriendListItem
            isOnline={ele.isOnline}
            id={ele.id}
            username={ele.username}
            key={ele.id}
          />
        );
      })}
    </MainContainer>
  );
};

export default FriendsList;
