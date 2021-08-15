import React from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { allUsers } = props;

  const usersHolder = Object.values(allUsers)
    .map((user) => {
      return {
        ...user,
        totalq: user.questions.length + Object.keys(user.answers).length,
      };
    })
    .sort((a, b) => b.totalq - a.totalq);

  console.log(usersHolder);
  const renderUsers = () => {
    return usersHolder.map((user) => {
      return (
        <div key={user.id} className="ui item">
          <div className="image">
            <img src={user.avatarURL} alt="user avatar" />
          </div>
          <div className="content" style={{ padding: "40px" }}>
            <h3 className="header">{user.name}</h3>
            <div className="meta">
              <span>Questions Asked: {user.questions.length}</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              Answers: {Object.keys(user.answers).length}
            </div>
          </div>
          <div
            style={{ padding: "40px", textAlign: "center" }}
            className="right floated item"
          >
            <h4>Total:</h4>
            <h2>{user.totalq}</h2>
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
