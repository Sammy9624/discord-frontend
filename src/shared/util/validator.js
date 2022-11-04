export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username, password }) => {
  return validateMail(mail) && validatePassword(password) && validateUsername(username);

};

const validateMail = (mail) => {
  const emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailPattern.test(mail);
};
const validatePassword = (password) => {
  return password.length > 5 && password.length < 13;
};
const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
  };
  