const initializeState = {
  nickName: "",
  twitter: "",
  myProfile: "",

}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_NICK_NAME":
      return Object.assign({}, state, {nickName: action.payload})
    case "SET_TWITTER":
      return Object.assign({}, state, {twitter: action.payload})
    case "SET_MY_PROFILE":
      return Object.assign({}, state, {myProfile: action.payload})
    default:
      return state;
  }
}