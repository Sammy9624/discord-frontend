import { friendsAction } from "../actions/friendsAction";

const initialState = {
  friends: [],
  pendingRequest: [],
  onlineUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case friendsAction.SET_PENDING_REQUESTS:
      return {
        ...state,
        pendingRequest: action.pendingRequest,
      };
    case friendsAction.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case friendsAction.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    default:
      return state;
  }
};

export default reducer;
