function setPassword(password){
  return {
    type: "SET_PASSWORD",
    payload: password,
  }
}

function setSecondPassword(secondPassword){
  return {
    type: "SET_SECOND_PASSWORD",
    payload: secondPassword,
  }
}

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

function setProfile(profile){
  return {
    type: "SET_PROFILE",
    payload: profile,
  }
}

export default ({
  setPassword,
  setSecondPassword,
  setNickName,
  setTwitterName,
  setProfile,
})