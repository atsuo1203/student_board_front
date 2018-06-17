import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class ProfileApi {
  /**
   *  get
   */
  // プロフィール取得
  static async getProfile() {
    // TODO: header追加
    try {
      return request
        .get(DEV_URL+'/user')
    } catch (e) {
      throw e;
    }
  }

  /**
   *  put
   */
  // プロフィール編集
  static async putProfile(nickName, twitterName, myprofile) {
    // TODO: header追加
    try {
      return request
        .put(DEV_URL+'/user')
        .send({nickName: nickName, twitterName: twitterName, profile: myprofile})
    } catch (e) {
      throw e;
    }
  }

  /**
   *  テスト用restAPI 通信テスト用
   */
  static async getTest() {
    try {
      return request.get(TEST_URL+'/posts/1');
    } catch (e) {
      throw e;
    }
  }

  static async putTest(nickName, twitterName, myprofile) {
    try {
      return request.get(TEST_URL+'/posts/1');
    } catch (e) {
      throw e;
    }
  }

}
