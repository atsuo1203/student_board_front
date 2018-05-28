import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Cached from 'material-ui/svg-icons/action/cached';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {reloadButtonStyle} from './style/ContentsStyle'

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