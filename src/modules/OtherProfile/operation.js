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
    yield take('GET_PROFILE')
    const data = {
      nickName: 'KMR',
      twitterName: '114514_kimura',
      myOtherProfile: 'なんで見る必要があるんですか'
    }
    try {
      // const response = yield call(OtherProfileApi.getOtherProfile)
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