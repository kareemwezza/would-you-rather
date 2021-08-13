import React from "react";
import { connect } from "react-redux";
import { saveAnswer } from "../../actions";

const UnAnsweredQuestion = (props) => {
  const { questionId, allQuestions } = props;
  const showedQuestion = allQuestions[questionId];

  const handleVoting = (answer) => {
    props.saveAnswer({ questionId, answer });
  };
  return (
    <div>
      <div className="card">
        <div
          className="ui bottom attached button"
          onClick={() => handleVoting("optionOne")}
        >
          <i className="add icon"></i>
          {showedQuestion.optionOne.text}
        </div>
      </div>
      <div className="card" style={{ marginTop: "20px" }}>
        <div
          className="ui bottom attached button"
          onClick={() => handleVoting("optionTwo")}
        >
          <i className="add icon"></i>
          {showedQuestion.optionTwo.text}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questionsReducer }) => {
  return { allQuestions: questionsReducer };
};

export default connect(mapStateToProps, { saveAnswer })(UnAnsweredQuestion);
