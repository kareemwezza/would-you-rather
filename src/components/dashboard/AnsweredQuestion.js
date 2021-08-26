import React from "react";
import { connect } from "react-redux";

function AnsweredQuestion(props) {
  const { questionId, allQuestions, votes, allUsers, authedUser } = props;
  const showedQuestion = allQuestions[questionId];
  const handleProgressValue = (option) => {
    const progress = (showedQuestion[option].votes.length / votes) * 100;
    return `${progress.toFixed(1)}%`;
  };

  const userAnswer = allUsers[authedUser].answers[questionId];

  return (
    <div>
      <div
        className={
          userAnswer === "optionOne"
            ? "ui indicating progress green"
            : "ui indicating progress"
        }
      >
        <div
          className="bar"
          style={{ width: `${handleProgressValue("optionOne")}` }}
        >
          <div className="progress">{handleProgressValue("optionOne")}</div>
        </div>
        <div className="label">{`${showedQuestion.optionOne.votes.length} voted for ${showedQuestion.optionOne.text}`}</div>
      </div>
      <div
        className={
          userAnswer === "optionTwo"
            ? "ui indicating progress green"
            : "ui indicating progress"
        }
      >
        <div
          className="bar"
          style={{ width: `${handleProgressValue("optionTwo")}` }}
        >
          <div className="progress">{handleProgressValue("optionTwo")}</div>
        </div>
        <div className="label">{`${showedQuestion.optionTwo.votes.length} voted for ${showedQuestion.optionTwo.text}`}</div>
      </div>
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

export default connect(mapStateToProps)(AnsweredQuestion);
