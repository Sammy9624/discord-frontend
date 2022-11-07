import io from "socket.io-client";

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
};
