import {fork, take, call} from 'redux-saga/effects';

import PasswordApi from '../../API/PasswordApi'

export function* passwordOperation() {
  yield fork(putPassword);
}

/*
 * put
 */
// パスワード変更
function* putPassword() {
  while (true) {
    const action = yield take('PUT_PASSWORD')
    const password = action.password
    const newPassword = action.newPassword
    const history = action.history
    try {
      yield call(PasswordApi.putPassword, password, newPassword)
      window.confirm('パスワード変更がが完了しました。\nログイン画面より登録したemailアドレスにてログインしてください')
      localStorage.removeItem('authorization');
      history.push('./')
    } catch (error) {
      console.log(error)
      window.confirm('何らかの原因によりパスワードの変更が失敗しました')
    }
  }
}