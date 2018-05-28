import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar, FlatButton} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Cached from 'material-ui/svg-icons/action/cached';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ContentsDiv, appBarStyle, titleStyle, reloadButtonStyle} from './style/ContentsStyle'
import {ReloadButton, CreateThreadButton} from './ContentsParts'

class Contents extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    onCreate: PropTypes.func.isRequired,
    onReload: PropTypes.func.isRequired,
  }
  render() {
    const {currentThread, onReload} = this.props
    return (
      <MuiThemeProvider>
        <ContentsDiv>
          <AppBar
            style={appBarStyle}
            title={<button>ほげ</button>}
            titleStyle={titleStyle}
            iconElementLeft={<CreateThreadButton currentThread={currentThread} onCreate={onReload}/> }
            iconElementRight={<ReloadButton currentThread={currentThread} onReload={onReload}/> }
          />
          hoge
        </ContentsDiv>
      </MuiThemeProvider>
    );
  }
}
export default Contents;