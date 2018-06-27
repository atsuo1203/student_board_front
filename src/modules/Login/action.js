function setEmail(email){
  return {
    type: "SET_EMAIL",
    payload: email,
  }
}

function setPassword(password){
  return {
    type: "SET_PASSWORD",
    payload: password,
  }
}

function postLogin(email, password, history) {
  return {
    type: "POST_LOGIN",
    email: email,
    password: password,
    history: history,
  }
}

export default ({
  setEmail,
  setPassword,
  postLogin,
})