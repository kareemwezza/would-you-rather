import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../../actions";

const HeaderMenu = (props) => {
  const handleSignOut = () => {
    props.signOutUser();
    window.location.reload();
  };

  const handleActiveItem = (to) => {
    if (to === props.location.pathname) {
      return "item active";
    }
    return "item";
  };

  return (
    <div className="ui large menu fluid">
      <div className="item">
        <img alt="App logo" src="/images/icon.svg"></img>
      </div>
      <Link to="/" className={handleActiveItem("/")}>
        Home
      </Link>
      <Link to="/new-question" className={handleActiveItem("/new-question")}>
        New Question
      </Link>
      <Link to="/leader-board" className={handleActiveItem("/leader-board")}>
        LeaderBoard
      </Link>
      <div className="right menu">
        <div className="item">
          <img
            className="ui mini circular image"
            src={props.users[props.currentUser].avatarURL}
            alt="user avatar"
          />
          <p style={{ marginLeft: "5px" }}>
            {props.users[props.currentUser].name}
          </p>
        </div>
        <div className="item">
          <div className="ui red button" onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ getUsers, authReducer }) => {
  return { users: getUsers, currentUser: authReducer.user };
};

export default connect(mapStateToProps, { signOutUser })(HeaderMenu);
