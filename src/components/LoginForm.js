import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";

const LoginForm = ({ users, getUsers, handleLogin }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    const onClickBody = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener("click", onClickBody);
    return () => {
      document.body.removeEventListener("click", onClickBody);
    };
  }, []);

  const renderUsers = () => {
    return Object.keys(users).map((userName) => {
      return (
        <div
          className="item"
          key={userName}
          onClick={() => setSelectedUser(userName)}
        >
          <img
            className="ui mini avatar image"
            src={users[userName].avatarURL}
            alt="user avatar"
          />
          {userName}
        </div>
      );
    });
  };

  return (
    <div>
      <div
        className={`ui selection fluid dropdown ${
          isOpen ? "active visible" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        ref={ref}
      >
        <i className="dropdown icon"></i>

        {selectedUser ? (
          <div className="text">
            <img
              className="ui avatar image"
              alt="user avatar"
              src={users[selectedUser].avatarURL}
            ></img>
            {selectedUser}
          </div>
        ) : (
          <div className="text default">Select User</div>
        )}

        <div className={`menu transition ${isOpen ? "visible" : ""}`}>
          {renderUsers()}
        </div>
      </div>
      <button
        className="ui red button fluid"
        style={{ marginTop: "20px" }}
        onClick={() => {
          handleLogin(selectedUser);
        }}
      >
        SIGN IN
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.getUsers };
};

export default connect(mapStateToProps, { getUsers })(LoginForm);
