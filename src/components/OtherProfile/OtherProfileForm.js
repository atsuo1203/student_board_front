import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/OtherProfile'

class OtherProfileForm extends Component {
  static propTypes = {
    nickName: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    otherProfile: PropTypes.string.isRequired,
    onClickDecision: PropTypes.func.isRequired,
  }
  render() {
    const {
      nickName, twitterName, otherProfile, onClickDecision} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="ニックネーム"
            value={nickName}
          /><br />
          <TextField
            hintText="Twitterアカウント(任意)"
            value={twitterName}
          /><br />
          <TextField
            hintText="自己プロフィール(任意)"
            value={otherProfile}
            multiLine={true}
            rows={8}
            cols={20}
          /><br />
          <FlatButton
            label="Top画面へ戻る"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={onClickDecision}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default OtherProfileForm;