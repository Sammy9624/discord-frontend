import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/Component/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageForm from "./LoginPageForm";
import { validateLoginForm } from "../../shared/util/validator";
import LoginPageHeader from "./LoginPageHeader";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";

const LoginPage = ({ login }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };
    login(userDetails, navigate );
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageForm
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};
const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionToProps)(LoginPage);
