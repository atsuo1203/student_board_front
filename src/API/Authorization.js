export default class Authorization {

  static getAuth() {
    const authorization = localStorage.getItem('authorization')
    return {Authorization: authorization}
  }

  static getContentType() {
    return {'Content-Type': 'application/json'}
  }

  static getAuthContentType() {
    const authorization = localStorage.getItem('authorization')
    return {Authorization: authorization, 'Content-Type': 'application/json'}
  }
}
