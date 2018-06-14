import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Profile'

class ProfileForm extends Component {
  static propTypes = {
    onChangeNickName: PropTypes.func.isRequired,
    onChangeTwitter: PropTypes.func.isRequired,
    onChangeMyProfile: PropTypes.func.isRequired,
    onClickDecision: PropTypes.func.isRequired,
  }
  render() {
    const {onClickDecision, onChangeNickName, onChangeTwitter, onChangeMyProfile} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="ニックネーム"
            onChange={onChangeNickName}
          /><br />
          <TextField
            hintText="Twitterアカウント(任意)"
            onChange={onChangeTwitter}
          /><br />
          <TextField
            hintText="自己プロフィール(任意)"
            multiLine={true}
            rows={8}
            cols={20}
            onChange={onChangeMyProfile}
          /><br />
          <FlatButton
            label="決定"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={() => onClickDecision()}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default ProfileForm;