import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions";

function RegisterUser(props) {
  const [newUser, setNewUser] = useState({
    fName: "",
    lName: "",
    username: "",
    avatar: null,
  });

  const handleUserRegisteration = async () => {
    await props.registerUser(newUser);
    props.history.push("/");
  };
  return (
    <div className="card" style={{ padding: "20px" }}>
      <img
        className="ui centered image small"
        alt="would you rather icon"
        src={"/images/icon.svg"}
        draggable="false"
      ></img>
      <h2>Create a new users and start adding new questions now!</h2>
      <form className="ui form">
        <div className="field">
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                placeholder="First Name"
                value={newUser.fName}
                onChange={(e) =>
                  setNewUser({ ...newUser, fName: e.target.value })
                }
              />
            </div>
            <div className="field">
              <input
                type="text"
                placeholder="Last Name"
                value={newUser.lName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="file" className="ui icon button">
              <i className="file icon"></i>
              select avatar
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) =>
                setNewUser({ ...newUser, avatar: e.target.files[0] })
              }
            />
          </div>
        </div>
      </form>
      <button
        className="ui red button fluid"
        style={{ marginTop: "20px" }}
        onClick={handleUserRegisteration}
      >
        CREATE USER
      </button>
      <p style={{ padding: "10px", color: "grey" }}>
        already have an account?{" "}
        <Link to="/login" className="grey">
          Login.
        </Link>
      </p>
    </div>
  );
}

export default connect(null, { registerUser })(RegisterUser);
