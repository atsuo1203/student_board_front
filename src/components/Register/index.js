import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import RegisterAction from '../../modules/Register/action'

import RegisterApi from '../../API/RegisterApi'
import LoginApi from '../../API/LoginApi'

import CommonHeader from '../common/CommonHeader'
import RegisterForm  from './RegisterForm'

class Register extends Component {
  handleLogin = () => {
    const {password, secondPassword, nickName, twitterName, profile} = this.props
    console.log(password, secondPassword)
    if ((password === "") || (password === undefined) || (password.length < 8)) {
      window.confirm('passwrodは英数字を用いた8文字となります')
      return
    }
    if ((password !== secondPassword)) {
      window.confirm('passwordが一致しません。もう一度入力してください')
      return
    }
    if (twitterName.match(/@/)){
      window.confirm('twitterのアカウント名は\n@以降の文字列を入力してください')
      return
    }
    if (profile.length > 150) {
      window.confirm('プロフィールは150字まででお願いします')
      return
    }
    // TODO getTest() を postRegister(password, nickName, twitterName, profile) に書き換え
    RegisterApi.getTest(password, nickName, twitterName, profile)
      .then(response => {
        console.log(response)
        // TODO getTest() を getLogin(email, password) に書き換え
        LoginApi.getTest()
          .then(res => {
            console.log(res)
            // TODO レスポンスから取る
            const data = {webToken: 'hogehogeWebToken'}
            localStorage.setItem('webToken', data.webToken)
            this.props.history.push('./top')
          })
          .catch()
      })
      .catch(error => {
        window.confirm('何らか問題が発生したため登録できません')
        console.log(error)
      })
  }

  handleChangePassword = (event) => {
    const {actions} = this.props
    actions.setPassword(event.target.value)
  }

  handleChangeSecondPassword = (event) => {
    const {actions} = this.props
    actions.setSecondPassword(event.target.value)
  }

  handleChangeNickName = (event) => {
    const {actions} = this.props
    actions.setNickName(event.target.value)
  }

  handleChangeTwitterName = (event) => {
    const {actions} = this.props
    actions.setTwitterName(event.target.value)
  }

  handleChangeProfile = (event) => {
    const {actions} = this.props
    actions.setProfile(event.target.value)
  }

  render() {
    return (
      <div>
        <CommonHeader title='登録ページ'/>
        <RegisterForm
          onClickRegister={this.handleLogin}
          onChangePassword={this.handleChangePassword}
          onChangeSecondPassword={this.handleChangeSecondPassword}
          onChangeNickName={this.handleChangeNickName}
          onChangeTwitterName={this.handleChangeTwitterName}
          onChangeProfile={this.handleChangeProfile}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  password: store.Register.password,
  secondPassword: store.Register.secondPassword,
  nickName: store.Register.nickName,
  twitterName: store.Register.twitterName,
  profile: store.Register.profile,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(RegisterAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));