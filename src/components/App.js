import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import history from "../utils/history";

import Login from "./Login";
import Dashboard from "./dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute";
import RegisterUser from "./RegisterUser";

const App = (props) => {
  useEffect(() => {
    console.log(sessionStorage.getItem("userId"));
  }, []);
  return (
    <div className="ui container center aligned">
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterUser} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
      <div
        className="ui vertical footer segment"
        style={{ position: "absolute" }}
      >
        <div className="ui container">
          &copy; Would You Rather ?. All Rights Reserved for{" "}
          <strong>Kareem Fouad</strong>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loginUser })(App);
