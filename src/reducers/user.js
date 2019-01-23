const user = (
  state = { userName: "Stan", userStatus: "not_logged_in" },
  action
) => {
  switch (action.type) {
    case "CHANGE_USER_NAME":
      // return Object.assign({}, state, { userName: action.userName });
      return {
        ...state,
        userName: action.userName
      };
    case "LOG_USER_OUT":
      return {
        ...state,
        userStatus: action.userStatus
      };

    default:
      return state;
  }
};

export default user;
