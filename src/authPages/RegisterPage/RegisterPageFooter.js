import React from "react";
import CustomPrimaryButton from "../../shared/Component/CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import RedirectInfo from "../../shared/Component/RedirectInfo";
import { Tooltip } from "@mui/material";


const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate("/login");
  };
  const getInValidMessage = () => {
    return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character.Also e-mail should provided";
  };
  const getValidMessage = () => {
    return "Press to register";
  };
  return (
    <>
      <Tooltip title={!isFormValid ? getInValidMessage() : getValidMessage()}>
        <div>
          <CustomPrimaryButton
            label={"Register"}
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text=""
        redirectText={"Already have an account ?"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
