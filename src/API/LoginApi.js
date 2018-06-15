import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class LoginApi {

  /**
   *  get
   */
  // auth
  // ログイン webTokenとuser_idが返ってくる
  static async getLogin() {
    try {
      return request.get(DEV_URL+'/auth/login');
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

}
