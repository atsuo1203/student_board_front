function setNickName(nickName){
  return {
    type: "SET_NICK_NAME",
    payload: nickName,
  }
}

function setTwitter(twitter){
  return {
    type: "SET_TWITTER",
    payload: twitter,
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
  setTwitter,
  setMyProfile,
})