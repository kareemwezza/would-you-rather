import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../actions";

import Questions from "./Questions";

function MainPage({ allQuestions, users, currentUser, getQuestions }) {
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);
  const [activeItem, setActiveItem] = useState("unanswered");
  const answeredQuestions = Object.keys(allQuestions).filter((aq) => {
    return Object.keys(users[currentUser].answers).find((q) => q === aq);
  });

  const unansweredQuestions = Object.keys(allQuestions).filter((aq) => {
    return Object.keys(users[currentUser].answers).indexOf(aq) === -1;
  });

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
      <div className="ui bottom attached segment">
        {activeItem === "answered" ? (
          <Questions questions={answeredQuestions} />
        ) : (
          <Questions questions={unansweredQuestions} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ questionsReducer, getUsers, authReducer }) => {
  return {
    allQuestions: questionsReducer,
    users: getUsers,
    currentUser: authReducer.user,
  };
};

export default connect(mapStateToProps, { getQuestions })(MainPage);
