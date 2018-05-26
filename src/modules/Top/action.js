function setUserName(name){
  return {
    type: "SET_USER_NAME",
    payload: name,
  }
}

function setCategoryTabVisual(isVisible){
  return {
    type: "SET_CATEGORY_TAB_VISUAL",
    payload: isVisible,
  }
}

export default ({
  setUserName,
  setCategoryTabVisual,
})