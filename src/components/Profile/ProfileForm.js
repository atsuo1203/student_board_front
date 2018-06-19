import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Form} from '../../style/Profile'

class ProfileForm extends Component {
  static propTypes = {
    nickName: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    myProfile: PropTypes.string.isRequired,
    onChangeNickName: PropTypes.func.isRequired,
    onChangeTwitter: PropTypes.func.isRequired,
    onChangeMyProfile: PropTypes.func.isRequired,
    onClickDecision: PropTypes.func.isRequired,
    onClickPasswordEdit: PropTypes.func.isRequired,
  }
  render() {
    const {
      nickName, twitterName, myProfile,
      onClickDecision, onClickPasswordEdit,
      onChangeNickName, onChangeTwitter, onChangeMyProfile} = this.props
    return (
      <MuiThemeProvider>
        <Form>
          <TextField
            hintText="ニックネーム"
            value={nickName}
            onChange={onChangeNickName}
          /><br />
          <TextField
            hintText="Twitterアカウント(任意)"
            value={twitterName}
            onChange={onChangeTwitter}
          /><br />
          <TextField
            hintText="自己プロフィール(任意)"
            value={myProfile}
            multiLine={true}
            rows={8}
            cols={20}
            onChange={onChangeMyProfile}
          /><br />
          <FlatButton
            label="編集完了"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            onClick={onClickDecision}
          /><br />
          <FlatButton
            label="パスワード編集"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            style={{position: 'relative', marginTop: '5px'}}
            onClick={onClickPasswordEdit}
          /><br />
        </Form>
      </MuiThemeProvider>
    );
  }
}
export default ProfileForm;