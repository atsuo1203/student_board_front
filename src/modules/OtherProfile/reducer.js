const initializeState = {
  nickName: "",
  twitterName: "",
  otherProfile: "",
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_OTHER_PROFILE":
      return Object.assign({}, state, {
        nickName: action.nickName,
        twitterName: action.twitterName,
        otherProfile: action.otherProfile,
      })
    default:
      return state;
  }
}