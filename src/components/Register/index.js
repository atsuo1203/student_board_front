import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import RegisterAction from '../../modules/Register/action'

import CommonHeader from '../common/CommonHeader'
import RegisterForm  from './RegisterForm'

class Register extends Component {
  handleLogin = () => {
    const {password, secondPassword, nickName, twitterName, profile} = this.props
    console.log('password', password)
    console.log('secondPassword', secondPassword)
    console.log('nickName', nickName)
    console.log('twitterName', twitterName)
    console.log('profile', profile)
    this.props.history.push('./top')
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