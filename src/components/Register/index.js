import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import RegisterAction from '../../modules/Register/action'

import CommonHeader from '../common/CommonHeader'
import RegisterForm  from './RegisterForm'

class Register extends Component {
  handleLogin = () => {
    const {email, password} = this.props
    console.log(email, password)
    this.props.history.push('./top')
  }

  render() {
    return (
      <div>
        <CommonHeader title='登録ページ'/>
        <RegisterForm
          onClickRegister={this.handleLogin}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(RegisterAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));