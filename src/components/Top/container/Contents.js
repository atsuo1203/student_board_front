import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ContentsDiv, InContentsDiv, appBarStyle} from './style/ContentsStyle'
import {ReloadButton, CreateButton, SortButton} from './contentsParts/HeadParts'
import ThreadContents from './contentsParts/ThreadContents'
import ArticleContents from './contentsParts/ArticleContents'

class Contents extends Component {
  static propTypes = {
    aCategoryThreadArray: PropTypes.array,
    currentThread: PropTypes.object.isRequired,
    sortArray: PropTypes.array.isRequired,
    currentSort: PropTypes.object.isRequired,
    onCreateThread: PropTypes.func.isRequired,
    onCreateComment: PropTypes.func.isRequired,
    onReload: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
  }
  render() {
    const {aCategoryThreadArray, currentThread, currentSort, onReload, sortArray,
      onCreateThread, onCreateComment, onSort} = this.props
    const label = currentThread.isCategory ? "スレッド新規作成" : "コメント新規作成"
    const onCreate = currentThread.isCategory ? onCreateThread : onCreateComment
    const inContents = currentThread.isCategory ?
      (<ThreadContents threads={aCategoryThreadArray}/>) :
      (<ArticleContents/>)
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
        <InContentsDiv >
          {inContents}
        </InContentsDiv>
        </ContentsDiv>
      </MuiThemeProvider>
    );
  }
}
export default Contents;