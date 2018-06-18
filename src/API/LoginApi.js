import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class LoginApi {

  /**
   *  get
   */
  // auth
  // ログイン authorizationが返ってくる
  static async getLogin(email, password) {
    try {
      return request
        .get(DEV_URL+'/auth/login')
        .send({email: email, password: password})
    } catch (e) {
      throw e;
    }
  }

  /**
   *  テスト用restAPI 通信テスト用
   */
  static async getTest() {
    try {
      return request.get(TEST_URL+'/posts/1')
    } catch (e) {
      throw e;
    }
  }

}
