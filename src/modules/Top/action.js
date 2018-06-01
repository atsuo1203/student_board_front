function setUserName(name){
  return {
    type: "SET_USER_NAME",
    payload: name,
  }
}

function setThreadArrays(threadArrays){
  return {
    type: "SET_THREAD_ARRAYS",
    payload: threadArrays,
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

function setSortArray(sortArray){
  return {
    type: "SET_SORT_ARRAY",
    payload: sortArray,
  }
}

function setCurrentSort(currentSort){
  return {
    type: "SET_CURRENT_SORT",
    payload: currentSort,
  }
}

function setArticles(articles){
  return {
    type: "SET_ARTICLES",
    payload: articles,
  }
}

export default ({
  setUserName,
  setThreadArrays,
  setCurrentThread,
  setCategoryArray,
  setCurrentCategory,
  setSortArray,
  setCurrentSort,
  setArticles,
})