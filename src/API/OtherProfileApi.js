import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class OtherProfileApi {
  /**
   *  get
   */
  // 人のプロフィール取得
  static async getOtherProfile(userId) {
    // TODO: header追加
    try {
      return request
        .get(DEV_URL+'/user/'+ String(userId))
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
