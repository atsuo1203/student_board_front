// 一括セット
function setOtherProfile(profile){
  return {
    type: "SET_OTHER_PROFILE",
    nickName: profile.nick_name,
    twitterName: profile.twitter_name,
    otherProfile: profile.profile,
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