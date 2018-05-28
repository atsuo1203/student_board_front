import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {IconButton, RaisedButton} from 'material-ui';
import Cached from 'material-ui/svg-icons/action/cached';
import Add from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {reloadButtonStyle, createButtonStyle } from './style/ContentsStyle'

export class ReloadButton extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    onReload: PropTypes.func.isRequired,
  }
  render() {
    const {currentThread, onReload} = this.props
    return (
      <MuiThemeProvider>
        <IconButton
          onClick={() => onReload(currentThread)}
          style={reloadButtonStyle}
        >
          <Cached />
        </IconButton>
      </MuiThemeProvider>
    );
  }
}

export class CreateThreadButton extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    onCreate: PropTypes.func.isRequired,
  }
  render() {
    const {currentThread, onCreate} = this.props
    return (
      <RaisedButton
        onClick={() => onCreate(currentThread)}
        label={'新規作成'}
        labelPosition={'before'}
        primary={true}
        icon={<Add />}
        style={createButtonStyle.button}
        labelStyle={createButtonStyle.buttonText}
      />
    );
  }
}