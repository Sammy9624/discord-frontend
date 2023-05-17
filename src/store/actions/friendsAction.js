import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const friendsAction = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_REQUESTS: "FRIENDS.SET_PENDING_REQUESTS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),

    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),

    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};
export const setPendingFriendsInvitation = (pendingInvitation) => {
  return { type: friendsAction.SET_PENDING_REQUESTS, pendingInvitation };
};

export const setFriend = (friends) => {
  return { type: friendsAction.SET_FRIENDS, friends };
};

export const setOnlineUser = (onlineUser) => {
  return { type: friendsAction.SET_ONLINE_USERS, onlineUser };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const res = await api.sendFriendInvitation(data);
    if (res.error) {
      dispatch(openAlertMessage(res.err?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation has been sent!"));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const res = await api.confirmRequest(data);
    if (res.error) {
      dispatch(openAlertMessage(res.err?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation accepted!"));
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const res = await api.rejectRequest(data);
    if (res.error) {
      dispatch(openAlertMessage(res.err?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation rejected!"));
    }
  };
};
