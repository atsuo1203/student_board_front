// 一括セット
function setProfile(profile){
  return {
    type: "SET_PROFILE",
    nickName: profile.nickName,
    twitterName: profile.twitterName,
    otherProfile: profile.otherProfile,
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

export default ({
  setProfile,
  getProfile,
})