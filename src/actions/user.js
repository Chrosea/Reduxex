export const changeUserName = ({ userName }) => ({
  type: "CHANGE_USER_NAME", //compulsory key!
  userName
});

export const logOutUser = ({ userStatus }) => ({
  type: "LOG_USER_OUT",
  userStatus
});
