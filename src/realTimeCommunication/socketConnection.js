import io from "socket.io-client";
import {
  setPendingFriendsInvitation,
  setFriend,
  setOnlineUser,
} from "../store/actions/friendsAction";
import store from "../store/store";
import updateDirectChatHistoryIfActive from "../shared/util/chat";

let socket = null;

export const connectionWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {
    console.log("connected successfully");
    console.log(socket.id);
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitation } = data;
    store.dispatch(setPendingFriendsInvitation(pendingInvitation));
  });

  socket.on("friends", (data) => {
    const { friends } = data;
    store.dispatch(setFriend(friends));
  });

  socket.on("chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("online-user", (data) => {
    const { onlineUser } = data;
    store.dispatch(setOnlineUser(onlineUser));
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const directChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};
