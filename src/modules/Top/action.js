function setThreadArray(threadArray){
  return {
    type: "SET_THREAD_ARRAY",
    payload: threadArray,
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

function setCurrentPaging(paging){
  return {
    type: "SET_CURRENT_PAGING",
    payload: paging,
  }
}

function setIsDialogOpen(isDialogOpen){
  return {
    type: "SET_IS_DIALOG_OPEN",
    payload: isDialogOpen,
  }
}

function setDialogThreadTitle(dialogThreadTitle){
  return {
    type: "SET_DIALOG_THREAD_TITLE",
    payload: dialogThreadTitle,
  }
}

function setDialogThreadComment(dialogThreadComment){
  return {
    type: "SET_DIALOG_THREAD_COMMENT",
    payload: dialogThreadComment,
  }
}

function setDialogArticleComment(dialogArticleComment){
  return {
    type: "SET_DIALOG_ARTICLE_COMMENT",
    payload: dialogArticleComment,
  }
}

/*
 * API関連
*/
function getCategoryArray(){
  return {
    type: "GET_CATEGORY_ARRAY",
  }
}

function getSortArray(){
  return {
    type: "GET_SORT_ARRAY",
  }
}

function getThread(threadId){
  return {
    type: "GET_THREAD",
    payload: threadId,
  }
}

function getThreadArray(categoryId, paging, sortId){
  return {
    type: "GET_THREAD_ARRAY",
    categoryId: categoryId,
    paging: paging,
    sortId: sortId,
  }
}

function postThread(categoryId, title, commentText){
  return {
    type: "POST_THREAD",
    categoryId: categoryId,
    title: title,
    commentText: commentText
  }
}

function postComment(threadId, commentText){
  return {
    type: "POST_COMMENT",
    threadId: threadId,
    commentText: commentText
  }
}

export default ({
  setThreadArray,
  setCurrentThread,
  setCategoryArray,
  setCurrentCategory,
  setSortArray,
  setCurrentSort,
  setArticleArray,
  setCurrentPaging,
  setIsDialogOpen,
  setDialogThreadTitle,
  setDialogThreadComment,
  setDialogArticleComment,
  getCategoryArray,
  getSortArray,
  getThread,
  getThreadArray,
  postThread,
  postComment,
})