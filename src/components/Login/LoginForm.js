import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LoginForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="email"
          /><br />
          <TextField
            hintText="password"
            type="password"
          /><br />
          <FlatButton label="ログイン"/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default LoginForm;