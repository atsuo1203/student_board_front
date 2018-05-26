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

function setCategoryNameArray(categoryNameArray){
  return {
    type: "SET_CATEGORY_NAME_ARRAY",
    payload: categoryNameArray,
  }
}

export default ({
  setUserName,
  setCategoryTabVisual,
  resetCategoryTabVisual,
  setCategoryNameArray,
})