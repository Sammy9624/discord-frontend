import store from "../../store/store";
import { setMessage } from "../../store/actions/chatActions";

const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?._id;

  if (receiverId && userId) {
    const userInCon = [userId, receiverId];
    updateChatHistory(participants, userInCon, messages);
  }
};

const updateChatHistory = (participants, userInCon, messages) => {
  const result = participants.every(function (participantId) {
    return userInCon.includes(participantId);
  });


  if (result) {
    store.dispatch(setMessage(messages));
  }
};

export default updateDirectChatHistoryIfActive;
