const authReducer = (
  state = { isAuthanticated: false, user: null },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthanticated: true, user: action.payload };
    case "SIGN_OUT":
      return { isAuthanticated: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
