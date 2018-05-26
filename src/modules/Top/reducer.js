const initializeState = {
  userName: "名前はまだない",
  isCategoryTabVisible : false,
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return Object.assign({}, state, {userName: action.payload})
    case "SET_CATEGORY_TAB_VISUAL":
      return Object.assign({}, state, {isCategoryTabVisible: action.payload})
    default:
      return state;
  }
}