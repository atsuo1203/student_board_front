import {fork, take, call} from 'redux-saga/effects';

import ProvRegisterApi from '../../API/ProvRegisterApi'

export function* provRegisterOperation() {
  yield fork(postProvRegister);
}

/*
 * post
 */
// 登録
function* postProvRegister() {
  while (true) {
    const action = yield take('POST_PROV_REGISTER')
    const email = action.payload
    try {
      yield call(ProvRegisterApi.postProvRegister, email)
      window.confirm('入力したメールアドレスにメールを送信しました。そちらから本登録を行ってください。')
    } catch (error) {
      console.log(error)
      window.confirm('そのメールアドレスはすでに使用されています。')
    }
  }
}