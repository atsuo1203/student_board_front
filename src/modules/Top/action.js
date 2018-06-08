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

function setCurrentThread(isCategory, threadId){
  return {
    type: "SET_CURRENT_THREAD",
    isCategory: isCategory,
    threadId: threadId,
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

function setArticleArray(articleArray){
  return {
    type: "SET_ARTICLE_ARRAY",
    payload: articleArray,
  }
}

function setHogehoge(hogehoge){
  return {
    type: "SET_HOGEHOGE",
    payload: hogehoge,
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
  setArticleArray,
  setHogehoge,
})