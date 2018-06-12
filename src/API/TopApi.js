import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class TopApi {

  /**
   *  カテゴリ一覧を取得
   */
  static async getCategories() {
    // TODO: headerを取得してつける
    try {
      return request.get(DEV_URL+'/categories');
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
