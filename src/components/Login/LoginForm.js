import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Login'

class LoginForm extends Component {
  static propTypes = {
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onClickLogin: PropTypes.func.isRequired,
    onClickCreateAccount: PropTypes.func.isRequired,
  }
  render() {
    const {onChangeEmail, onChangePassword, onClickLogin, onClickCreateAccount} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="email"
            onChange={onChangeEmail}
          /><br />
          <TextField
            hintText="password"
            type="password"
            onChange={onChangePassword}
          /><br />
          <FlatButton
            label="ログイン"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={() => onClickLogin()}
            style={{position: 'relative', margin: '3px'}}
          /><br />
          <FlatButton
            label="アカウント新規作成"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={() => onClickCreateAccount()}
            style={{position: 'relative', margin: '3px'}}
          /><br />
          パスワードを忘れた
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default LoginForm;