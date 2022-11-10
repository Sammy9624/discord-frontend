import io from "socket.io-client";
import { setPendingFriendsInvitation } from "../store/actions/friendsAction";
import store from "../store/store";
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
    console.log("request sent");
    console.log("pendingInvitation", pendingInvitation);
    store.dispatch(setPendingFriendsInvitation(pendingInvitation));
  });
};
