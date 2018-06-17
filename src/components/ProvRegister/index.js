import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ProvRegisterAction from '../../modules/ProvRegister/action'

import CommonHeader from '../common/CommonHeader'
import ProvRegisterForm from './ProvRegisterForm'
import ProvRegisterApi from '../../API/ProvRegisterApi';

class ProvRegister extends Component {
  handleSetEmail = (e) => {
    const {actions} = this.props
    actions.setEmail(e.target.value)
  }

  handleClickProvRegister = () => {
    const {email} = this.props
    if ((email === "") || (email === undefined)) {
      window.confirm('emailを入力してください')
      return
    }
    if (!email.match(/@/)) {
      window.confirm('emailの形式が正しくありません。もう一度入力してください')
      return
    }
    // TODO postProvRegister() に変更
    ProvRegisterApi.getTest(email)
      .then(response => {
        window.confirm('入力したメールアドレスにメールを送信しました。そちらから本登録を行ってください')
        // TODO ↓消す
        this.props.history.push('./register')
      })
      .catch(error => {
        window.confirm('emailが無効です。\nすでに登録されているか使用できないemailです。\n大学より発行されたemailを入力してください')
        return
      })
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