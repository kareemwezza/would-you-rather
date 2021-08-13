const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...action.payload };
    case "SAVE_QUESTION":
      return { ...state, [action.payload.id]: action.payload };
    case "SAVE_ANSWER":
      return action.payload;
    default:
      return state;
  }
};

export default questionReducer;
