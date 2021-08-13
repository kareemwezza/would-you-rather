import * as api from "../utils/Data";
import history from "../utils/history";

export const getUsers = () => async (dispatch) => {
  const response = await api._getUsers();
  dispatch({ type: "GET_USERS", payload: response });
};

export const loginUser = (userId) => {
  sessionStorage.setItem("userId", userId);
  return { type: "LOGIN", payload: userId };
};

export const registerUser = (newUser) => async (dispatch) => {
  const response = await api._createUser(newUser);
  dispatch({ type: "LOGIN", payload: response.id });
};

export const signOutUser = () => {
  sessionStorage.clear();
  return { type: "SIGN_OUT" };
};

export const getQuestions = () => async (dispatch) => {
  const response = await api._getQuestions();
  dispatch({ type: "GET_QUESTIONS", payload: response });
};

export const saveQuestion =
  ({ optionOne: optionOneText, optionTwo: optionTwoText }) =>
  async (dispatch, getState) => {
    const author = getState().authReducer.user;
    const savedQuestion = { optionOneText, optionTwoText, author };
    const response = await api._saveQuestion(savedQuestion);
    dispatch({ type: "SAVE_QUESTION", payload: response });
    history.push("/");
  };

export const saveAnswer =
  ({ questionId: qid, answer }) =>
  async (dispatch, getState) => {
    const authedUser = getState().authReducer.user;
    const response = await api._saveQuestionAnswer({ authedUser, qid, answer });
    console.log(authedUser, qid, answer);
    dispatch({ type: "SAVE_ANSWER", payload: response });
    dispatch({
      type: "USER_ANSWERS_QUESTION",
      payload: { authedUser, qid, answer },
    });
  };
