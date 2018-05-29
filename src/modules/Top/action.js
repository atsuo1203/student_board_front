function setUserName(name){
  return {
    type: "SET_USER_NAME",
    payload: name,
  }
}

function setCurrentThread(isCategory, threadID){
  return {
    type: "SET_CURRENT_THREAD",
    isCategory: isCategory,
    threadID: threadID,
  }
}

function setCategoryArray(categoryArray){
  return {
    type: "SET_CATEGORY_ARRAY",
    payload: categoryArray,
  }
}

function setCurrentCategory(category){
  return {
    type: "SET_CURRENT_CATEGORY",
    payload: category,
  }
}

export default ({
  setUserName,
  setCurrentThread,
  setCategoryArray,
  setCurrentCategory,
})