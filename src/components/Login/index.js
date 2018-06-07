import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import LoginAction from '../../modules/Login/action'

import CommonHeader from '../common/CommonHeader'
import LoginForm from './LoginForm'

class Login extends Component {
  handleSetEmail = (e) => {
    const {actions} = this.props
    actions.setEmail(e.target.value)
  }

  handleSetPassword = (e) => {
    const {actions} = this.props
    actions.setPassword(e.target.value)
  }

  handleLogin = () => {
    const {email, password} = this.props
    console.log(email, password)
    this.props.history.push('./top')
  }

  handleCreateAccount = () => {
    this.props.history.push('./preRegister')
  }

  render() {
    return (
      <div>
        <CommonHeader title='ログインページ'/>
        <LoginForm
          onChangeEmail={this.handleSetEmail}
          onChangePassword={this.handleSetPassword}
          onClickLogin={this.handleLogin}
          onClickCreateAccount={this.handleCreateAccount}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.Login.email,
  password: store.Login.password,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(LoginAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
