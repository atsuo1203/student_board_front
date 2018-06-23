import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';
import Authorization from './Authorization'

export default class LoginApi {

  /**
   *  post
   */
  // auth
  // ログイン authorizationが返ってくる
  static async postLogin(email, password) {
    try {
      return request
        .post(DEV_URL+'/auth/login')
        .set(Authorization.getContentType())
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
