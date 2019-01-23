import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUserName, logOutUser } from "./actions";
//import { logOutUser } from "./actions";

class App extends Component {
  handleClick = () => {
    // Dispatch an event
    // Change username in store
    const user = { userName: "Xiao Hei" };
    this.props.changeUserName(user);
  };

  componentDidMount() {
    const login = { userStatus: "logged_in" };
    this.props.logOutUser(login);
  }

  handleAdmin = () => {
    const user = { userName: "Admin" };
    this.props.changeUserName(user);
  };

  handleLogout = () => {
    const logout = { userStatus: "logged_out" };
    this.props.logOutUser(logout);
  };

  render() {
    return (
      <div>
        Hi {this.props.myUserName}, you have {this.props.myUserStatus}
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.handleAdmin}>Click to become Admin</button>
        <button onClick={this.handleLogout}>Log out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // map state in store to current compoent.props
  // what kind of values do we want to use in current page?
  return {
    myUserName: state.user.userName,
    myUserStatus: state.user.userStatus
  };
}

export default connect(
  mapStateToProps,
  { changeUserName, logOutUser }
)(App);
// high order component
