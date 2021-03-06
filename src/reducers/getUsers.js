const getUsers = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    case "SIGN_UP":
      return { ...state, [action.payload.id]: action.payload };
    case "SAVE_QUESTION":
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat(
            action.payload.id
          ),
        },
      };
    case "USER_ANSWERS_QUESTION":
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default getUsers;
