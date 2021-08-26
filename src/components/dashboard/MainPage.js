import React, { useState } from "react";
import { connect } from "react-redux";

import Questions from "./Questions";

function MainPage({ allQuestions, allUsers, authedUser }) {
  const [activeItem, setActiveItem] = useState("unanswered");
  const sortedQuestions = Object.values(allQuestions).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const answeredQuestions = sortedQuestions.filter(({ id }) => {
    return Object.keys(allUsers[authedUser].answers).find((aId) => aId === id);
  });

  const unansweredQuestions = sortedQuestions.filter(({ id }) => {
    return Object.keys(allUsers[authedUser].answers).indexOf(id) === -1;
  });

  const handleQuestionsLoading = () => {
    if (Object.keys(allQuestions).length) {
      return (
        <div className="ui bottom attached segment">
          {activeItem === "answered" ? (
            <Questions questions={answeredQuestions} />
          ) : (
            <Questions questions={unansweredQuestions} />
          )}
        </div>
      );
    }
    return (
      <div className="ui bottom attached segment" style={{ height: "30vh" }}>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading...</div>
        </div>
        <p></p>
      </div>
    );
  };

  return (
    <div>
      <h2 className="ui header teal">Dashboard</h2>
      <div className="ui top attached tabular menu">
        <div
          onClick={() => setActiveItem("unanswered")}
          className={activeItem === "unanswered" ? "active item" : "item"}
        >
          Unanswered Questions
          <span className="ui red circular label">
            {unansweredQuestions.length}
          </span>
        </div>

        <div
          onClick={() => setActiveItem("answered")}
          className={activeItem === "answered" ? "active item" : "item"}
        >
          Answered Questions
          <span className="ui teal circular label">
            {answeredQuestions.length}
          </span>
        </div>
      </div>
      {handleQuestionsLoading()}
    </div>
  );
}

const mapStateToProps = ({ questionsReducer, getUsers, authReducer }) => {
  return {
    allQuestions: questionsReducer,
    allUsers: getUsers,
    authedUser: authReducer.user,
  };
};

export default connect(mapStateToProps)(MainPage);
