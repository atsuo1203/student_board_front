import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {AppBar, FlatButton} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Cached from 'material-ui/svg-icons/action/cached';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ContentsDiv, appBarStyle, titleStyle, reloadButtonStyle} from './style/ContentsStyle'

class Contents extends Component {
  static propTypes = {
    onReload: PropTypes.func.isRequired,
  }
  render() {
    const {onReload} = this.props
    const reloadButton = (
      <MuiThemeProvider>
        <IconButton
          onClick={() => onReload()}
          style={reloadButtonStyle}
        >
          <Cached />
        </IconButton>
      </MuiThemeProvider>
    )
    return (
      <MuiThemeProvider>
        <ContentsDiv>
          <AppBar
            style={appBarStyle}
            title={"Category"}
            titleStyle={titleStyle}
            iconElementLeft={<button>新規作成</button>}
            iconElementRight={reloadButton}
          />
          hoge
        </ContentsDiv>
      </MuiThemeProvider>
    );
  }
}
export default Contents;