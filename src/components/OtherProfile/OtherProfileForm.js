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
            id="nickName"
            disabled={true}
            style={{cursor: 'text'}}
            children={<div>{nickName}</div>}
            inputStyle={{textAlign: 'left', position: 'relative', top: '10px', color: 'brack'}}
          /><br />
          <TextField
            id='twitterName'
            disabled={true}
            style={{cursor: 'text'}}
            children={<div>{'@'+twitterName}</div>}
            inputStyle={{textAlign: 'left', position: 'relative', top: '10px', color: 'brack'}}
          /><br />
          <TextField
            id='otherProfile'
            multiLine={true}
            rows={8}
            cols={20}
            disabled={true}
            style={{cursor: 'text'}}
            children={<div>{otherProfile}</div>}
            inputStyle={{textAlign: 'left', position: 'relative', top: '10px', color: 'brack'}}
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