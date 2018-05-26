const initializeState = {
  userName: "名前はまだない",
  isCategoryTabVisible : false,
  categoryNameArray: [],
  tabName: "雑談",
  currentThread: {isCategory: true, name: ""},
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return Object.assign({}, state, {userName: action.payload})
    case "SET_CATEGORY_TAB_VISUAL":
      return Object.assign({}, state, {isCategoryTabVisible: action.payload})
    case "RESET_CATEGORY_TAB_VISUAL":
      return Object.assign({}, state, {isCategoryTabVisible: false})
    case "SET_CATEGORY_NAME_ARRAY":
      return Object.assign({}, state, {categoryNameArray: action.payload})
    case "SET_TAB_NAME":
      return Object.assign({}, state, {tabName: action.payload})
    case "SET_CURRENT_THREAD":
      return Object.assign({}, state, {currentThread: {
        isCategory: action.isCategory,
        name: action.name
      }})
    default:
      return state;
  }
}