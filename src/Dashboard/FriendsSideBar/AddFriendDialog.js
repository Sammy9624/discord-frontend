import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { validateMail } from "../../shared/util/validator";
import { Typography } from "@mui/material";
import InputWithLabel from "../../shared/Component/InputWithLabel";
import CustomPrimaryButton from "../../shared/Component/CustomPrimaryButton";
import { getActions } from "../../store/actions/friendsAction";
import { connect } from "react-redux";

const AddFriendDialog = ({
  dialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation({ targetMail: mail });
  };
  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            label="Mail"
            type="text"
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            label={"Send"}
            disabled={!isFormValid}
            onClick={handleSendInvitation}
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "15px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionToProps)(AddFriendDialog);
