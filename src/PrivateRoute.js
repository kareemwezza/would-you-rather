import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return auth.isAuthanticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: routeProps.location,
              },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return { auth: state.authReducer };
};

export default connect(mapStateToProps)(PrivateRoute);
