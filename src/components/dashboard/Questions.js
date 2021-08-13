import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Questions({ questions, allQuestions, users }) {
  const renderQuestions = () => {
    return questions.map((question) => {
      return (
        <div key={question} className="column">
          <Link className="ui card" to={`/question/${question}`}>
            <div className="content">
              <div className="header">Would you rather ..?</div>
              <div className="description">
                <p>{allQuestions[question].optionOne.text}</p>
                <div className="ui horizontal divider">Or</div>
                <p>{allQuestions[question].optionTwo.text}</p>
              </div>
            </div>
            <div className="extra content">
              <div className="right floated author">
                <img
                  className="ui avatar image"
                  src={users[allQuestions[question].author].avatarURL}
                  alt="user avatar"
                />{" "}
                {allQuestions[question].author}
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  const handleNoquestions = () => {
    return (
      <div
        style={{
          height: "400px",
          padding: "150px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <i className="calendar check outline icon huge teal"></i>
        <h3>WoW..! You answered all questions here.</h3>
      </div>
    );
  };
  return (
    <div className="ui stackable four column grid">
      {questions.length ? renderQuestions() : handleNoquestions()}
    </div>
  );
}

const mapStateToProps = ({ questionsReducer, getUsers }) => {
  return { allQuestions: questionsReducer, users: getUsers };
};

export default connect(mapStateToProps)(Questions);
