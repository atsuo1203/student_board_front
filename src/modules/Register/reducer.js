const initializeState = {
  email: '',
}

export default (state=initializeState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return Object.assign({}, state, {email: action.payload})
    default:
      return state;
  }
}