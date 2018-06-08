import {fork} from 'redux-saga/effects'
import {topOperation} from '../modules/Top/operation'

//redux-saga起動
function* rootSaga() {
  yield fork(topOperation)
}

export {
  rootSaga,
}