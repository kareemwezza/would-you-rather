import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion";

function Question(props) {
  const { allUsers, authedUser } = props;
  const questionId = props.match.params.id;
  const showedQuestion = props.allQuestions[questionId];
  if (Object.keys(props.allQuestions).length && !showedQuestion) {
    return <Redirect to="/404" />;
  }
  if (!Object.keys(props.allQuestions).length) {
    return (
      <div className="ui segment">
        <div className="ui placeholder">
          <div className="image header">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }
  const totalVotes =
    showedQuestion.optionOne.votes.length +
    showedQuestion.optionTwo.votes.length;

  const checkAnsweredQuestion = () => {
    const userAnsweredquestion = Object.keys(allUsers[authedUser].answers);
    if (userAnsweredquestion.indexOf(questionId) === -1) {
      return false;
    }
    return true;
  };
  return (
    <div>
      <h2 className="ui header teal">{`${showedQuestion.author} asked: `}</h2>
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <div className="ui medium image">
              <img src="/images/avatars/male.png" alt="user avatar" />
            </div>
            <div
              className="content"
              style={{ padding: "50px", margin: "20px" }}
            >
              <h2 className="ui header teal" style={{ marginBottom: "30px" }}>
                Would you rather ..?
              </h2>
              {checkAnsweredQuestion() ? (
                <AnsweredQuestion questionId={questionId} votes={totalVotes} />
              ) : (
                <UnAnsweredQuestion questionId={questionId} />
              )}
            </div>
          </div>
        </div>
        <div className="extra content">
          <i className="green check icon"></i>
          {totalVotes} votes
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ questionsReducer, authReducer, getUsers }) => {
  return {
    allQuestions: questionsReducer,
    allUsers: getUsers,
    authedUser: authReducer.user,
  };
};

export default connect(mapStateToProps)(Question);
