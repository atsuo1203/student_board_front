function setEmail(email){
  return {
    type: "SET_EMAIL",
    payload: email,
  }
}

export default ({
  setEmail,
})