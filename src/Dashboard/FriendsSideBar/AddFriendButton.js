import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/Component/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3BA55D",
};

const AddFriendButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialogHandler = () => {
    setDialogOpen(true);
  };

  const closeDialogHandler = () => {
    setDialogOpen(false);
  };
  
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label={"Add Friend"}
        onClick={openDialogHandler}
      />
      <AddFriendDialog
        dialogOpen={dialogOpen}
        closeDialogHandler={closeDialogHandler}
      />
    </>
  );
};

export default AddFriendButton;
