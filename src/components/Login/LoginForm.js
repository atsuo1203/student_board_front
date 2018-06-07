import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Login'

class LoginForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="email"
          /><br />
          <TextField
            hintText="password"
            type="password"
          /><br />
          <FlatButton
            label="ログイン"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
          /><br />
          パスワードを忘れた
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default LoginForm;