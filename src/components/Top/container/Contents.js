import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {ContentsDiv, InContentsDiv, appBarStyle} from '../../../style/Top/container/ContentsStyle'
import {ReloadButton, CreateButton, SortButton} from './contentsParts/HeadParts'
import ThreadContents from './contentsParts/ThreadContents'
import ArticleContents from './contentsParts/ArticleContents'
import DialogDefault from './contentsParts/DialogDefault';
import DialogThread from './contentsParts/DialogThread';
import DialogArticle from './contentsParts/DialogArticle';

class Contents extends Component {
  static propTypes = {
    aCategoryThreadArray: PropTypes.array,
    currentThread: PropTypes.object.isRequired,
    sortArray: PropTypes.array.isRequired,
    currentSort: PropTypes.object.isRequired,
    currentPage: PropTypes.number.isRequired,
    onCreateThread: PropTypes.func.isRequired,
    onCreateComment: PropTypes.func.isRequired,
    onReload: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onPaging: PropTypes.func.isRequired,
    addArticle: PropTypes.func.isRequired,
    currentArticle: PropTypes.object,
    isDialogOpen: PropTypes.bool.isRequired,
    onChangeDialog: PropTypes.func.isRequired,
    onChangeDialogThreadTitle: PropTypes.func.isRequired,
    onChangeDialogThreadComment: PropTypes.func.isRequired,
    onChangeDialogArticleComment: PropTypes.func.isRequired,
  }
  render() {
    const {aCategoryThreadArray, currentThread, currentSort, currentPage,
      onReload, sortArray, onCreateThread, onCreateComment, onSort, onPaging,
      addArticle, currentArticle, isDialogOpen, onChangeDialog,
      onChangeDialogThreadTitle, onChangeDialogThreadComment, onChangeDialogArticleComment,
    } = this.props
    const label = currentThread.isCategory ? "スレッド新規作成" : "コメント新規作成"
    const onCreate = currentThread.isCategory ? onCreateThread : onCreateComment
    const inContents = currentThread.isCategory ?
      (<ThreadContents threads={aCategoryThreadArray}
        addArticle={addArticle} currentPage={currentPage} onPaging={onPaging}/>) :
      (<ArticleContents currentArticle={currentArticle}/>)
    const sortButton = currentThread.isCategory ?
      (<SortButton sortArray={sortArray} currentSort={currentSort} onSort={onSort}/>) :
      (null)
    const dialogChild = currentThread.isCategory ?
      (<DialogThread onChangeTitle={onChangeDialogThreadTitle} onChangeComment={onChangeDialogThreadComment}/>)
      : (<DialogArticle onChangeComment={onChangeDialogArticleComment}/>)
    return (
      <MuiThemeProvider>
        <ContentsDiv>
          <AppBar
            style={appBarStyle}
            titleStyle={{position: 'relative', transform: 'scale(0.01)'}}
            iconElementLeft={<CreateButton
              label={label} currentThread={currentThread}
              isDialogOpen={isDialogOpen} onChangeDialog={onChangeDialog}
            />}
            iconElementRight={<div style={{display: 'flex', flexDirection: 'row'}}>
              {sortButton}
              <ReloadButton currentThread={currentThread} onReload={onReload}/>
              </div>}
            iconStyleRight={{display: 'flex', flexDirection: 'row'}}
          />
        <InContentsDiv >
          {inContents}
        </InContentsDiv>
        <DialogDefault
          onCreate={onCreate} currentThread={currentThread} isDialogOpen={isDialogOpen}
          onChangeDialog={onChangeDialog} dialogChild={dialogChild} label={label}/>
        </ContentsDiv>
      </MuiThemeProvider>
    );
  }
}
export default Contents;