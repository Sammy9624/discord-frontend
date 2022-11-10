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
  };
};
export const setPendingFriendsInvitation = (pendingInvitation) => {
  return { type: friendsAction.SET_PENDING_REQUESTS, pendingInvitation };
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
