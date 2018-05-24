const initializeState = {
  userName: "名前はまだない",
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      return Object.assign({}, state, {inputValue: action.payload})
    case "CHANGE_USER_NAME":
      return Object.assign({}, state, {userName: action.payload})
    default:
      return state;
  }
}