import React from "react";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({
  showAlertMessage,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={5000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStoreToProps = ({ alert }) => {
  return {
    ...alert,
  };
};
const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(mapStoreToProps, mapActionToProps)(AlertNotification);
