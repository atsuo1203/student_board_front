import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ProvRegisterAction from '../../modules/ProvRegister/action'

import CommonHeader from '../common/CommonHeader'
import ProvRegisterForm from './ProvRegisterForm'

class ProvRegister extends Component {
  handleSetEmail = (e) => {
    const {actions} = this.props
    actions.setEmail(e.target.value)
  }

  handleClickProvRegister = () => {
    console.log()
  }

  handleClickProvRegister = () => {
    const {email} = this.props
    console.log(email)
    this.props.history.push('./register')
  }

  render() {
    return (
      <div>
        <CommonHeader title='仮登録ページ'/>
        <ProvRegisterForm
          onChangeEmail={this.handleSetEmail}
          onClickProvRegister={this.handleClickProvRegister}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.ProvRegister.email,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProvRegisterAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProvRegister));