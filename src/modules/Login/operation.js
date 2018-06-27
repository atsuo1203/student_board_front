import {fork, take, call} from 'redux-saga/effects';

import LoginApi from '../../API/LoginApi'

export function* loginOperation() {
  yield fork(postLogin);
}

/*
 * get
 */
// ログインできたかどうかを返す
function* postLogin() {
  while (true) {
    const action = yield take('POST_LOGIN')
    const email = action.email
    const password = action.password
    const history = action.history
    try {
      const response = yield call(LoginApi.postLogin, email, password)
      localStorage.setItem('authorization', 'Bearer ' + response.body.web_token)
      history.push('./top')
    } catch (error) {
      console.log(error)
      window.confirm('ログインに失敗しました。ユーザ名かパスワードが合っているか確認してください')
    }
  }
}