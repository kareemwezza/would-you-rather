import React, { useState } from "react";
import { connect } from "react-redux";
import { saveQuestion } from "../../actions";

const NewQuestion = (props) => {
  const [vote, setVote] = useState({ optionOne: "", optionTwo: "" });

  const handleVotes = (e) => {
    setVote({ ...vote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.saveQuestion(vote);
  };

  return (
    <div className="ui raised very padded text container segment">
      <h2 className="ui header teal">
        <i className="question icon"></i>Add New Question
      </h2>
      <h3 className="ui h3">Would you rather..?</h3>
      <form className="ui form">
        <div className="field">
          <label>First Option</label>
          <input
            type="text"
            name="optionOne"
            value={vote.optionOne}
            placeholder="First Option"
            onChange={(e) => handleVotes(e)}
          />
        </div>
        <div className="field">
          <label>Second Option</label>
          <input
            type="text"
            name="optionTwo"
            value={vote.optionTwo}
            placeholder="Second Option"
            onChange={(e) => handleVotes(e)}
          />
        </div>
        <button
          className="ui button fluid"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { saveQuestion })(NewQuestion);
