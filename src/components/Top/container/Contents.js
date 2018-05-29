import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ContentsDiv, appBarStyle} from './style/ContentsStyle'
import {ReloadButton, CreateButton, SortButton} from './contentsParts/HeadParts'

class Contents extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    sortArray: PropTypes.array.isRequired,
    currentSort: PropTypes.object.isRequired,
    onCreateThread: PropTypes.func.isRequired,
    onCreateComment: PropTypes.func.isRequired,
    onReload: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
  }
  render() {
    const {currentThread, currentSort, onReload, sortArray,
      onCreateThread, onCreateComment, onSort} = this.props
    const label = currentThread.isCategory ? "スレッド新規作成" : "コメント新規作成"
    const onCreate = currentThread.isCategory ? onCreateThread : onCreateComment
    return (
      <MuiThemeProvider>
        <ContentsDiv>
          <AppBar
            style={appBarStyle}
            iconElementLeft={<CreateButton
              label={label} currentThread={currentThread} onCreate={onCreate}/> }
            iconElementRight={<div>
              <SortButton sortArray={sortArray} currentSort={currentSort} onSort={onSort}/>
              <ReloadButton currentThread={currentThread} onReload={onReload}/>
              </div>}
            iconStyleRight={{position: 'relative', top: '-20px'}}
          />
          hoge
        </ContentsDiv>
      </MuiThemeProvider>
    );
  }
}
export default Contents;