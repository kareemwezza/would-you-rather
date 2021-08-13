import React from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { allUsers } = props;

  const renderUsers = () => {
    return Object.keys(allUsers).map((user) => {
      return (
        <div key={user} className="ui item">
          <div className="image">
            <img src={allUsers[user].avatarURL} alt="user avatar" />
          </div>
          <div className="content" style={{ padding: "40px" }}>
            <h3 className="header">{allUsers[user].name}</h3>
            <div className="meta">
              <span>Questions Asked: {allUsers[user].questions.length}</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              Answers: {Object.keys(allUsers[user].answers).length}
            </div>
          </div>
          <div
            style={{ padding: "40px", textAlign: "center" }}
            className="right floated item"
          >
            <h4>Total:</h4>
            <h2>
              {allUsers[user].questions.length +
                Object.keys(allUsers[user].answers).length}
            </h2>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui container">
      <h2 className="ui header teal">LeaderBoard</h2>
      <div className="ui items segment very padded">{renderUsers()}</div>
    </div>
  );
};

const mapStateToProps = ({ getUsers }) => {
  return { allUsers: getUsers };
};

export default connect(mapStateToProps)(LeaderBoard);
