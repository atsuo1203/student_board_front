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
    const data = {
      nick_name: 'beast先輩',
      twitter_name: '114514_yajjuu',
      profile: '24歳学生です'
    }
    try {
      // const response = yield call(ProfileApi.getProfile)
      const response = yield call(ProfileApi.getTest)
      console.log(response)
      const profile = data
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
    const data = {
      nick_name: nickName,
      twitter_name: twitterName,
      profile: myProfile
    }
    try {
      // const response = yield call(ProfileApi.putProfile, nickName, twitterName, myprofile)
      const response = yield call(ProfileApi.putTest, nickName, twitterName, myProfile)
      console.log(response)
      // TODO: dataをresponse.bodyに書き換え
      const profile = data
      yield put(ProfileAction.setProfile(profile))
    } catch (error) {
      console.log(error)
      window.confirm('データの取得に失敗しました。ページの更新を行ってください')
    }
  }
}