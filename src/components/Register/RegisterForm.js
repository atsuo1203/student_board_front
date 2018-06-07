import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Register'

class RegisterForm extends Component {
  static propTypes = {
    onClickRegister: PropTypes.func.isRequired,
  }
  render() {
    const {onClickRegister} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="パスワード(新規作成)"
          /><br />
          <TextField
            hintText="パスワード(再入力)"
          /><br />
          <TextField
            hintText="ニックネーム"
          /><br />
          <TextField
            hintText="Twitterアカウント(任意)"
          /><br />
          <TextField
            hintText="自己プロフィール(任意)"
          /><br />
          <FlatButton
            label="登録"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={() => onClickRegister()}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default RegisterForm;