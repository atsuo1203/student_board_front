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

// 一括セット
function setProfile(profile){
  return {
    type: "SET_PROFILE",
    nickName: profile.nick_name,
    twitterName: profile.twitter_name,
    myProfile: profile.profile,
  }
}

/*
 * get
 */
function getProfile(){
  return {
    type: "GET_PROFILE",
  }
}

/*
 * put
 */
function putProfile(nickName, twitterName, myProfile, history){
  return {
    type: "PUT_PROFILE",
    nickName: nickName,
    twitterName: twitterName,
    myProfile: myProfile,
    history: history,
  }
}

export default ({
  setNickName,
  setTwitterName,
  setMyProfile,
  setProfile,
  getProfile,
  putProfile,
})