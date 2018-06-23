import {fork, take, call} from 'redux-saga/effects';

import RegisterApi from '../../API/RegisterApi'

export function* registerOperation() {
  yield fork(postRegister);
}

/*
 * get
 */
// 登録
function* postRegister() {
  while (true) {
    const action = yield take('POST_REGISTER')
    const password = action.password
    const nickName = action.nickName
    const twitterName = action.twitterName
    const profile = action.profile
    const token = action.token
    const history = action.history
    try {
      yield call(RegisterApi.postRegister,
        password, nickName, twitterName, profile, token
      )
      history.push('./')
    } catch (error) {
      console.log(error)
      window.confirm('何らかの原因により登録に失敗しました')
    }
  }
}