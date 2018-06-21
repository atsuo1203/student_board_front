function setEmail(email){
  return {
    type: "SET_EMAIL",
    payload: email,
  }
}

function postProvRegister(email){
  return {
    type: "POST_PROV_REGISTER",
    payload: email,
  }
}

export default ({
  setEmail,
  postProvRegister
})