import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/PreRegister'

class PreRegisterForm extends Component {
  static propTypes = {
    onClickPreRegister: PropTypes.func.isRequired,
  }
  render() {
    const {onChangeEmail, onClickPreRegister} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="email"
            onChange={onChangeEmail}
          /><br />
          <FlatButton
            label="仮登録"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={() => onClickPreRegister()}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default PreRegisterForm;