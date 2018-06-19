const initializeState = {
  password: "",
  newPassword: "",
  secondNewPassword: "",
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return Object.assign({}, state, {password: action.payload})
    case "SET_NEW_PASSWORD":
      return Object.assign({}, state, {newPassword: action.payload})
    case "SET_SECOND_NEW_PASSWORD":
      return Object.assign({}, state, {secondNewPassword: action.payload})
    default:
      return state;
  }
}