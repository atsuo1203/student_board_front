import {fork} from 'redux-saga/effects'
import {topOperation} from '../modules/Top/operation'
import {otherProfileOperation} from '../modules/OtherProfile/operation'
import {profileOperation} from '../modules/Profile/operation'

//redux-saga起動
function* rootSaga() {
  yield fork(topOperation)
  yield fork(otherProfileOperation)
  yield fork(profileOperation)
}

export {
  rootSaga,
}