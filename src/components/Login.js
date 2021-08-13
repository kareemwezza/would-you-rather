import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions";

import LoginForm from "./LoginForm";

const Login = (props) => {
  console.log(props);
  const [redirectToPage, setRedirectToPage] = useState(false);
  const { from } = props.location.state || { from: { pathname: "/" } };
  const handleLogin = (user) => {
    props.loginUser(user);
    setRedirectToPage(true);
  };
  if (redirectToPage) {
    return <Redirect to={from} />;
  }
  return (
    <div className="card" style={{ padding: "20px" }}>
      <img
        className="ui centered image small"
        alt="would you rather icon"
        src={"/images/icon.svg"}
        draggable="false"
      ></img>
      <h2>
        Select a user and sign in to start answer questions with Would you
        rather game ?
      </h2>
      <LoginForm handleLogin={handleLogin} />

      <p style={{ padding: "10px", color: "grey" }}>
        Can't find your account?{" "}
        <Link to="/register" className="grey">
          create new user.
        </Link>
      </p>
    </div>
  );
};

export default connect(null, { loginUser })(Login);
