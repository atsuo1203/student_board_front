// 一括セット
function setOtherProfile(profile){
  return {
    type: "SET_OTHER_PROFILE",
    nickName: profile.nickName,
    twitterName: profile.twitterName,
    otherProfile: profile.otherProfile,
  }
}

/*
 * get
 */
function getOtherProfile(userId){
  return {
    type: "GET_OTHER_PROFILE",
    payload: userId,
  }
}

export default ({
  setOtherProfile,
  getOtherProfile,
})