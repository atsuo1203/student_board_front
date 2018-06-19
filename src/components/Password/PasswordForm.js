import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Password'

class PasswordForm extends Component {
  static propTypes = {
    onClickPasswordEdit: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onChangeNewPassword: PropTypes.func.isRequired,
    onChangeSecondNewPassword: PropTypes.func.isRequired,
  }

  render() {
    const {onClickPasswordEdit,
      onChangePassword, onChangeNewPassword, onChangeSecondNewPassword} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="現在のパスワード"
            type="password"
            onChange={onChangePassword}
          /><br />
          <TextField
            hintText="新しいパスワード"
            type="password"
            onChange={onChangeNewPassword}
          /><br />
          <TextField
            hintText="新しいパスワード(再入力)"
            type="password"
            onChange={onChangeSecondNewPassword}
          /><br />
          <FlatButton
            label="パスワード変更"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={onClickPasswordEdit}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default PasswordForm;