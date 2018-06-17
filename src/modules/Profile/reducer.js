const initializeState = {
  nickName: "",
  twitterName: "",
  myProfile: "",

}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_NICK_NAME":
      return Object.assign({}, state, {nickName: action.payload})
    case "SET_TWITTER_NAME":
      return Object.assign({}, state, {twitterName: action.payload})
    case "SET_MY_PROFILE":
      return Object.assign({}, state, {myProfile: action.payload})
    case "SET_PROFILE":
      return Object.assign({}, state, {
        nickName: action.nickName,
        twitterName: action.twitterName,
        myProfile: action.myProfile,
      })
    default:
      return state;
  }
}