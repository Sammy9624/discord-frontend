import React from "react";
import CustomPrimaryButton from "../../shared/Component/CustomPrimaryButton";
import { useNavigate } from "react-router-dom";
import RedirectInfo from "../../shared/Component/RedirectInfo";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };
  const getInValidMessage = () => {
    return "Enter correct email address and password should contains between 6 and 12 character";
  };
  const getValidMessage = () => {
    return "Press to log in";
  };
  return (
    <>
      <Tooltip title={!isFormValid ? getInValidMessage() : getValidMessage()}>
        <div>
          <CustomPrimaryButton
            label={"Log in"}
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text="Need an account? "
        redirectText={"Create an account"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
