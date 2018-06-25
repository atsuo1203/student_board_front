import {fork, take, put, call} from 'redux-saga/effects';

import ProfileAction from '../../modules/Profile/action'
import ProfileApi from '../../API/ProfileApi'

export function* profileOperation() {
  yield fork(getProfile);
  yield fork(putProfile);
}

/*
 * get
 */
// userProfileを取得して書き換え
function* getProfile() {
  while (true) {
    yield take('GET_PROFILE')
    try {
      const response = yield call(ProfileApi.getProfile)
      const profile = response.body
      yield put(ProfileAction.setProfile(profile))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}

/*
 * put
 */
// プロフィール編集
function* putProfile() {
  while (true) {
    const action = yield take('PUT_PROFILE')
    const nickName = action.nickName
    const twitterName = action.twitterName
    const myProfile = action.myProfile
    try {
      const response = yield call(ProfileApi.putProfile, nickName, twitterName, myProfile)
      const profile = response.body
      yield put(ProfileAction.setProfile(profile))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}