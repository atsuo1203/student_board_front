import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import PreRegisterAction from '../../modules/PreRegister/action'

import CommonHeader from '../common/CommonHeader'
import PreRegisterForm from './PreRegisterForm'

class PreRegister extends Component {
  handleSetEmail = (e) => {
    const {actions} = this.props
    actions.setEmail(e.target.value)
  }

  handleClickPreRegister = () => {
    console.log()
  }

  handleClickPreRegister = () => {
    const {email} = this.props
    console.log(email)
    this.props.history.push('./register')
  }

  render() {
    return (
      <div>
        <CommonHeader title='仮登録ページ'/>
        <PreRegisterForm
          onChangeEmail={this.handleSetEmail}
          onClickPreRegister={this.handleClickPreRegister}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.PreRegister.email,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(PreRegisterAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreRegister));