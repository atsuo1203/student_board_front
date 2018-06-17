const initializeState = {
  password: "",
  secondPassword: "",
  nickName: "",
  twitterName: "",
  profile: "",
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return Object.assign({}, state, {password: action.payload})
    case "SET_SECOND_PASSWORD":
      return Object.assign({}, state, {secondPassword: action.payload})
    case "SET_NICK_NAME":
      return Object.assign({}, state, {nickName: action.payload})
    case "SET_TWITTER_NAME":
      return Object.assign({}, state, {twitterName: action.payload})
    case "SET_PROFILE":
      return Object.assign({}, state, {profile: action.payload})
    default:
      return state;
  }
}