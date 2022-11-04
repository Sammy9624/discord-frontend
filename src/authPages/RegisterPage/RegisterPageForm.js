import React from "react";
import InputWithLabel from "../../shared/Component/InputWithLabel";

const RegisterPageForm = ({
  mail,
  username,
  password,
  setMail,
  setPassword,
  setUsername,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="e-mail"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Password"
      />
    </>
  );
};

export default RegisterPageForm;
