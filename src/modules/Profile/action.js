function setNickName(nickName){
  return {
    type: "SET_NICK_NAME",
    payload: nickName,
  }
}

function setTwitterName(twitterName){
  return {
    type: "SET_TWITTER_NAME",
    payload: twitterName,
  }
}

function setMyProfile(myProfile){
  return {
    type: "SET_MY_PROFILE",
    payload: myProfile,
  }
}

export default ({
  setNickName,
  setTwitterName,
  setMyProfile,
})