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

export default ({
  setEmail,
  setPassword,
})