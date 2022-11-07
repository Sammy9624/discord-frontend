import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";

import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import { connectionWithSocketServer } from "../realTimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashBoard = ({ setUserDetails }) => {
  const userDetails = localStorage.getItem("user");

  useEffect(() => {
    setUserDetails(JSON.parse(userDetails));
    connectionWithSocketServer(JSON.parse(userDetails));
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};
const mapActionToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(null, mapActionToProps)(DashBoard);
