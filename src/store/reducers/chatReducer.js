import { chatAction } from "../actions/chatActions";

const initialState = {
  chosenChatDetails: null,
  chatType: null,
  message: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case chatAction.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
        chosenChatDetails: action.chatDetail,
        chatType: action.chatType,
        message: [],
      };

    case chatAction.SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default reducer;
