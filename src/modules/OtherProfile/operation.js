import {fork, take, put, call} from 'redux-saga/effects';

import OtherProfileAction from '../../modules/OtherProfile/action'
import OtherProfileApi from '../../API/OtherProfileApi'

export function* otherProfileOperation() {
  yield fork(getOtherProfile);
}

/*
 * get
 */
// userOtherProfileを取得して書き換え
function* getOtherProfile() {
  while (true) {
    const action = yield take('GET_OTHER_PROFILE')
    const userId = action.payload
    try {
      const response = yield call(OtherProfileApi.getOtherProfile, userId)
      const profile = response.body
      yield put(OtherProfileAction.setOtherProfile(profile))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}