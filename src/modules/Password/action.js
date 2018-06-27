function setPassword(password){
  return {
    type: "SET_PASSWORD",
    payload: password,
  }
}

function setNewPassword(newPassword){
  return {
    type: "SET_NEW_PASSWORD",
    payload: newPassword,
  }
}

function setSecondNewPassword(secondNewPassword){
  return {
    type: "SET_SECOND_NEW_PASSWORD",
    payload: secondNewPassword,
  }
}

function putPassword(password, newPassword, history) {
  return {
    type: "PUT_PASSWORD",
    password: password,
    newPassword: newPassword,
    history: history
  }
}

export default ({
  setPassword,
  setNewPassword,
  setSecondNewPassword,
  putPassword,
})