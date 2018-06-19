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
    console.log(userId)
    const data = {
      nick_name: 'KMR',
      twitter_name: '114514_kimura',
      profile: 'なんで見る必要があるんですか'
    }
    try {
      // const response = yield call(OtherProfileApi.getOtherProfile, userId)
      const response = yield call(OtherProfileApi.getTest)
      console.log(response)
      const profile = data
      yield put(OtherProfileAction.setOtherProfile(profile))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}