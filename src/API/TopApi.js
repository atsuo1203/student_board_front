import {DEV_URL, TEST_URL} from './endpoint'
import request from 'superagent';
import Authorization from './Authorization';

export default class TopApi {

  /**
   *  get
   */
  // categories
  static async getCategories() {
    // TODO: headerを取得してつける
    try {
      return request
        .get(DEV_URL+'/categories')
        .set(Authorization.getAuth())
    } catch (e) {
      throw e;
    }
  }

  // sorts
  static async getSorts() {
    // TODO: headerを取得してつける
    try {
      return request
        .get(DEV_URL+'/sorts')
        .set(Authorization.getAuth())
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
        .set(Authorization.getAuth())
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
        .set(Authorization.getAuth())
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
        .set(Authorization.getAuthContentType())
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
        .set(Authorization.getAuthContentType())
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
      return request.get(TEST_URL+'/posts/1')
    } catch (e) {
      throw e;
    }
  }

}
