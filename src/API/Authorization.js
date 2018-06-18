export default class Authorization {

  /**
   *  get
   */
  static getAuth() {
    const authorization = localStorage.getItem('authorization')
    return {Authorization: authorization}
  }

  /**
   *  post
   */

  static getAuthContentType() {
    const authorization = localStorage.getItem('authorization')
    return {Authorization: authorization, ContentType: 'application/json'}
  }
}
