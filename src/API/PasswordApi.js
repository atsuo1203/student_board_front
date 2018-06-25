import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';
import Authorization from './Authorization';

export default class PasswordApi {

  /**
   *  post
   */
  // パスワード変更を行う
  static async putPassword(password, newPassword) {
    try {
      return request
        .put(DEV_URL+'/user/password')
        .set(Authorization.getAuthContentType())
        .send({password: password, new_password: newPassword})
    } catch (e) {
      throw e;
    }
  }

  /**
   *  テスト用restAPI 通信テスト用
   */
  static async getTest(password, newPassword) {
    try {
      return request.get(TEST_URL+'/posts/1')
    } catch (e) {
      throw e;
    }
  }

}
