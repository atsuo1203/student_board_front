import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';

export default class TopApi {

  /**
   *  get
   */
  // categories
  static async getCategories() {
    // TODO: headerを取得してつける
    try {
      return request.get(DEV_URL+'/categories');
    } catch (e) {
      throw e;
    }
  }

  // sorts
  static async getSorts() {
    // TODO: headerを取得してつける
    try {
      return request.get(DEV_URL+'/sorts');
    } catch (e) {
      throw e;
    }
  }

  // thread
  static async getThread(threadId) {
    // TODO: headerを取得してつける
    try {
      return request
        .get(DEV_URL+'/thread/'+String(threadId))
    } catch (e) {
      throw e;
    }
  }

  // threads
  static async getThreads(categoryId, page, sortId) {
    // TODO: headerを取得してつける
    try {
      return request
        .get(DEV_URL+'/threads/'+String(categoryId))
        .query({page: page, sort_id: sortId})
    } catch (e) {
      throw e;
    }
  }

  /*
   * post
   */
  // thread
  static async postThreads(title, categoryId, commentText) {
    // TODO: headerを取得してつける
    try {
      return request
        .post(DEV_URL+'/thread/')
        .send({title: title, category_id: categoryId, commentText: commentText})
    } catch (e) {
      throw e;
    }
  }

  // comment
  static async postComment(threadId, commentText) {
    // TODO: headerを取得してつける
    try {
      return request
        .post(DEV_URL+'/thread/comment/'+String(threadId))
        .send({text: commentText})
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
