const initializeState = {
  email: '',
  password: ''
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return Object.assign({}, state, {email: action.payload})
    case "SET_PASSWORD":
      return Object.assign({}, state, {password: action.payload})
    default:
      return state;
  }
}