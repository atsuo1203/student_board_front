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

function resetCategoryTabVisual(){
  return {
    type: "RESET_CATEGORY_TAB_VISUAL",
  }
}

function setCategoryArray(categoryArray){
  return {
    type: "SET_CATEGORY_ARRAY",
    payload: categoryArray,
  }
}

function setTabName(tabName){
  return {
    type: "SET_TAB_NAME",
    payload: tabName,
  }
}

function setCurrentThread(isCategory, threadID){
  return {
    type: "SET_CURRENT_THREAD",
    isCategory: isCategory,
    threadID: threadID,
  }
}

export default ({
  setUserName,
  setCategoryTabVisual,
  resetCategoryTabVisual,
  setCategoryArray,
  setTabName,
  setCurrentThread,
})