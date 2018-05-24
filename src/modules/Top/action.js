function changeInputValue(inputValue){
  return {
    type: "CHANGE_INPUT_VALUE",
    payload: inputValue,
  }
}

function changeUserName(name){
  return {
    type: "CHANGE_USER_NAME",
    payload: name,
  }
}

export default ({
  changeInputValue,
  changeUserName,
})