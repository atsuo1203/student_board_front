import CategoryModel from '../../models/CategoryModel'
const initializeState = {
  userName: "名前はまだない",
  isCategoryTabVisible : false,
  categoryArray: [new CategoryModel()],
  threadName: "雑談",
  currentThread: {isCategory: true, threadID: "category_hoge"},
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return Object.assign({}, state, {userName: action.payload})
    case "SET_CATEGORY_TAB_VISUAL":
      return Object.assign({}, state, {isCategoryTabVisible: action.payload})
    case "RESET_CATEGORY_TAB_VISUAL":
      return Object.assign({}, state, {isCategoryTabVisible: false})
    case "SET_CATEGORY_ARRAY":
      return Object.assign({}, state, {categoryArray: action.payload})
    case "SET_TAB_NAME":
      return Object.assign({}, state, {threadName: action.payload})
    case "SET_CURRENT_THREAD":
      return Object.assign({}, state, {currentThread: {
        isCategory: action.isCategory,
        threadID: action.threadID
      }})
    default:
      return state;
  }
}