import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar, FlatButton} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Cached from 'material-ui/svg-icons/action/cached';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ContentsDiv, appBarStyle, titleStyle, reloadButtonStyle} from './style/ContentsStyle'
import {ReloadButton, CreateButton} from './ContentsParts'

class Contents extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    onCreateThread: PropTypes.func.isRequired,
    onCreateComment: PropTypes.func.isRequired,
    onReload: PropTypes.func.isRequired,
  }
  render() {
    const {currentThread, onReload, onCreateThread, onCreateComment} = this.props
    const label = currentThread.isCategory ? "スレッド新規作成" : "コメント新規作成"
    const onCreate = currentThread.isCategory ? onCreateThread : onCreateComment
    return (
      <MuiThemeProvider>
        <ContentsDiv>
          <AppBar
            style={appBarStyle}
            iconElementLeft={<CreateButton
              label={label} currentThread={currentThread} onCreate={onCreate}/> }
            iconElementRight={<div><ReloadButton currentThread={currentThread} onReload={onReload}/>
              <ReloadButton currentThread={currentThread} onReload={onReload}/> </div>}
          />
          hoge
        </ContentsDiv>
      </MuiThemeProvider>
    );
  }
}
export default Contents;