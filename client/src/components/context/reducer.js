const reducer = (state, action) => {
  if (action.type === "USER_SUCCESS") {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLogin: true,
    };
  }
};
export default reducer;
