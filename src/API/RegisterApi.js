import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class RegisterApi {

  /**
   *  post
   */
  // auth
  // 登録を行う
  static async postRegister(password, nickName, twitterName, profile, token) {
    try {
      return request
        .post(DEV_URL+'/auth/register')
        .send({password: password, nick_name: nickName,
          twitter_name: twitterName, profile: profile, token: token})
    } catch (e) {
      throw e;
    }
  }

  /**
   *  テスト用restAPI 通信テスト用
   */
  static async getTest(password, nickName, twitterName, profile, token) {
    try {
      return request.get(TEST_URL+'/posts/1')
    } catch (e) {
      throw e;
    }
  }

}
