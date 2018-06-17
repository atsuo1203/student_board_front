import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Register'

class RegisterForm extends Component {
  static propTypes = {
    onClickRegister: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onChangeNickName: PropTypes.func.isRequired,
    onChangeTwitterName: PropTypes.func.isRequired,
    onChangeProfile: PropTypes.func.isRequired,
  }
  render() {
    const {onClickRegister, onChangePassword, onChangeSecondPassword,
      onChangeNickName, onChangeTwitterName, onChangeProfile} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="パスワード(新規作成)"
            type="password"
            onChange={onChangePassword}
          /><br />
          <TextField
            hintText="パスワード(再入力)"
            type="password"
            onChange={onChangeSecondPassword}
          /><br />
          <TextField
            hintText="ニックネーム"
            onChange={onChangeNickName}
          /><br />
          <TextField
            hintText="Twitterアカウント(任意, @なし)"
            onChange={onChangeTwitterName}
          /><br />
          <TextField
            hintText="自己プロフィール(任意)"
            multiLine={true}
            rows={8}
            cols={20}
            onChange={onChangeProfile}
          /><br />
          <FlatButton
            label="登録"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={onClickRegister}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default RegisterForm;