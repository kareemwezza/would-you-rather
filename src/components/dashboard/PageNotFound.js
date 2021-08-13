import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div
      className="ui grid middle aligned segment inverted"
      style={{ height: "80vh", margin: "0" }}
    >
      <div className="ui column center aligned">
        <div className="ui inverted statistic">
          <div className="value">404</div>
          <div className="label">Error</div>
        </div>

        <div className="ui message inverted">
          <div className="header">Page you are Looking for not found</div>
          <Link to="/" className="primary ui button" style={{ margin: "20px" }}>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
