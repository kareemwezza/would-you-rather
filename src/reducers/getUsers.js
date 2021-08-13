const getUsers = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
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
