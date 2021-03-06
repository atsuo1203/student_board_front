import {fork} from 'redux-saga/effects'
import {topOperation} from '../modules/Top/operation'
import {otherProfileOperation} from '../modules/OtherProfile/operation'
import {profileOperation} from '../modules/Profile/operation'
import {provRegisterOperation} from '../modules/ProvRegister/operation'
import {registerOperation} from '../modules/Register/operation'
import {loginOperation} from '../modules/Login/operation'
import {passwordOperation} from '../modules/Password/operation'

//redux-saga起動
function* rootSaga() {
  yield fork(topOperation)
  yield fork(otherProfileOperation)
  yield fork(profileOperation)
  yield fork(provRegisterOperation)
  yield fork(registerOperation)
  yield fork(loginOperation)
  yield fork(passwordOperation)
}

export {
  rootSaga,
}