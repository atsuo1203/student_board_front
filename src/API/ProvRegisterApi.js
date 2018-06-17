import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class ProvRegisterApi {

  /**
   *  post
   */
  // auth
  // 登録を行う
  static async postProvRegister(password, nickName, twitterName, profile) {
    try {
      return request
        .post(DEV_URL+'/auth/prov_register')
        .send({password: password, nickName: nickName, twitterName: twitterName, profile: profile})
    } catch (e) {
      throw e;
    }
  }

  /**
   *  テスト用restAPI 通信テスト用
   */
  static async getTest(password, nickName, twitterName, profile) {
    console.log(password, nickName, twitterName, profile)
    try {
      return request.get(TEST_URL+'/posts/1');
    } catch (e) {
      throw e;
    }
  }

}
