const initializeState = {
  userName: "名前はまだない",
  isCategoryTabVisible : false,
  categoryNameArray: [],
  tabName: "雑談",
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
    default:
      return state;
  }
}