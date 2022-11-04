const alertAction = {
  OPEN_ALERT_MESSAGE: "OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: (content) => dispatch(closeAlertMessage(content)),
  };
};

export const openAlertMessage = (content) => {
  return {
    type: alertAction.OPEN_ALERT_MESSAGE,
    content,
  };
};
export const closeAlertMessage = (content) => {
  return {
    type: alertAction.CLOSE_ALERT_MESSAGE,
    content,
  };
};
export default alertAction;
