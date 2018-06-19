import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import PasswordAction from '../../modules/Password/action'

import PasswordApi from '../../API/PasswordApi'

import CommonHeader from '../common/CommonHeader'
import PasswordForm  from './PasswordForm'

class Password extends Component {
  handlePasswordEdit = () => {
    const {password, newPassword, secondNewPassword} = this.props
    if ((password === "") || (password === undefined) || (password.length < 8)) {
      window.confirm('passwrodを正しく入力してください\nパスワードは英数字を含めた8文字です')
      return
    }
    if ((newPassword === "") || (newPassword === undefined) || (newPassword.length < 8)) {
      console.log(newPassword)
      window.confirm('新しいpasswrodを正しく入力してください\nパスワードは英数字を含めた8文字です')
      return
    }
    if ((newPassword !== secondNewPassword)) {
      window.confirm('新しいpasswordが一致しません。もう一度入力してください')
      return
    }
    if ((newPassword === password)) {
      window.confirm('現在のパスワードと新しいパスワードが同じです')
      return
    }
    // TODO getTest() を postPassword(password, newPassword) に書き換え
    PasswordApi.getTest(password, newPassword)
      .then(response => {
        console.log(response)
        window.confirm('パスワード変更がが完了しました。\nログイン画面より登録したemailアドレスにてログインしてください')
        localStorage.removeItem('authorization');
        this.props.history.push('/')
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

  handleChangeNewPassword = (event) => {
    const {actions} = this.props
    actions.setNewPassword(event.target.value)
  }

  handleChangeSecondNewPassword = (event) => {
    const {actions} = this.props
    actions.setSecondNewPassword(event.target.value)
  }

  render() {
    return (
      <div>
        <CommonHeader title='パスワード変更ページ'/>
        <PasswordForm
          onClickPasswordEdit={this.handlePasswordEdit}
          onChangePassword={this.handleChangePassword}
          onChangeNewPassword={this.handleChangeNewPassword}
          onChangeSecondNewPassword={this.handleChangeSecondNewPassword}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  password: store.Password.password,
  newPassword: store.Password.newPassword,
  secondNewPassword: store.Password.secondNewPassword,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PasswordAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Password));