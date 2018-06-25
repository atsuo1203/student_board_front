import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import Tab from './container/Tab'
import Contents from './container/Contents'

import {Div, TabContainer} from '../../style/Top'

class Top extends Component {
  async componentWillMount () {
    const {actions} = this.props
    actions.getCategoryArray()
    actions.getSortArray()
    actions.getThreadArray(1, 1, 1)
  }
  // TODO: 選択された時にAPI通信を行い、Articleの配列に追加して行く予定
  handleAddArticle = (threadId) => {
    const {actions} = this.props
    actions.getThread(threadId)
  }
  handleClickMenu = (categoryId) => {
    const {actions, categoryArray, currentSort, currentPaging} = this.props
    const category = categoryArray.find(c => {
      return (c.id === categoryId )
    })
    actions.setCurrentCategory(category)
    actions.getThreadArray(categoryId, currentPaging, currentSort.id)
  }
  handleDelete = (threadId) => {
    const {actions, articleArray, currentCategory} = this.props
    var _articleArray = articleArray
    _articleArray.forEach((article, index, array) => {
      if (article.id === threadId) {
        array.splice(index, 1)
      }
    })
    actions.setArticleArray(_articleArray)
    actions.setCurrentThread(true, currentCategory.id)
  }
  handleSelectTab = (isCategory, threadId) => {
    const {actions} = this.props
    actions.setCurrentThread(isCategory, threadId)
  }
  handleCreateThread = () => {
    const {actions, currentCategory, dialogThreadTitle, dialogThreadComment} = this.props
    actions.postThread(currentCategory.id, dialogThreadTitle, dialogThreadComment)
  }
  handleCreateComment = () => {
    const {actions, currentThread, dialogArticleComment} = this.props
    actions.postComment(currentThread.threadId, dialogArticleComment)
  }
  handleThreadsReload = () => {
    const {actions, currentCategory, currentPaging, currentSort} = this.props
    actions.getThreadArray(currentCategory.id, currentPaging, currentSort.id)
  }
  handleThreadReload = () => {
    console.log('handleThreadReload')
    const {actions, currentThread} = this.props
    actions.reloadThread(currentThread.threadId)
  }
  handleSort = (sortModel) => {
    const {actions, currentCategory, currentPaging} = this.props
    actions.setCurrentSort(sortModel)
    actions.getThreadArray(currentCategory.id, currentPaging, sortModel.id)
  }
  handleLogout = () => {
    localStorage.removeItem('authorization');
    this.props.history.push('/')
  }
  handlePaging = (paging) => {
    const {actions, currentCategory, currentSort} = this.props
    if (paging > 0) {
      actions.setCurrentPaging(paging)
      actions.getThreadArray(currentCategory.id, paging, currentSort.id)
    }
  }
  handleOnChangeDialog = (isDialogOpen) => {
    const {actions} = this.props
    actions.setIsDialogOpen(isDialogOpen)
  }
  handleOnChangeDialogThreadTitle = (event) => {
    const {actions} = this.props
    actions.setDialogThreadTitle(event.target.value)
  }
  handleOnChangeDialogThreadComment = (event) => {
    const {actions} = this.props
    actions.setDialogThreadComment(event.target.value)
  }
  handleOnChangeDialogArticleComment = (event) => {
    const {actions} = this.props
    actions.setDialogArticleComment(event.target.value)
  }
  handleToProfile = () => {
    this.props.history.push('/profile')
  }
  handleOnClickUserName = (userId) => {
    console.log('click userName')
    this.props.history.push('/otherProfile/' + String(userId))
  }
  makeTabs = () => {
    const {currentThread, articleArray} = this.props
    const tabs = []
    articleArray.forEach(article => {
      tabs.push(<Tab
        key={article.title}
        threadName={article.title}
        threadId={article.id}
        currentThread={currentThread}
        isCategoryThread={false}
        onDelete={this.handleDelete}
        onSelect={this.handleSelectTab}
      />)
    });
    return tabs
  }
  render() {
    const {categoryArray, sortArray,
      currentCategory, currentThread, currentSort, currentPaging,
      threadArray, articleArray, isDialogOpen,
      dialogThreadTitle, dialogThreadComment, dialogArticleComment} = this.props
    // 現在の記事
    const currentArticle = (articleArray.length === 0) ? null :
      articleArray.filter(article => String(currentThread.threadId) === String(article.id))[0]
    return (
      <Div>
        <Header
          categoryArray={categoryArray}
          currentCategory={currentCategory}
          onClickMenu={this.handleClickMenu}
          onClickLogout={this.handleLogout}
          toProfile={this.handleToProfile}
          />
        <TabContainer>
          <Tab
            threadName={currentCategory.name}
            threadId={currentCategory.id}
            currentThread={currentThread}
            isCategoryThread={true}
            onDelete={this.handleDelete}
            onSelect={this.handleSelectTab}
          />
          {this.makeTabs()}
        </TabContainer>
        <Contents
          threadArray={threadArray}
          currentThread={currentThread}
          sortArray={sortArray}
          currentSort={currentSort}
          currentPaging={currentPaging}
          onThreadsReload={this.handleThreadsReload}
          onThreadReload={this.handleThreadReload}
          onCreateThread={this.handleCreateThread}
          onCreateComment={this.handleCreateComment}
          onSort={this.handleSort}
          onPaging={this.handlePaging}
          addArticle={this.handleAddArticle}
          currentArticle={currentArticle}
          isDialogOpen={isDialogOpen}
          onChangeDialog={this.handleOnChangeDialog}
          onChangeDialogThreadTitle={this.handleOnChangeDialogThreadTitle}
          onChangeDialogThreadComment={this.handleOnChangeDialogThreadComment}
          onChangeDialogArticleComment={this.handleOnChangeDialogArticleComment}
          dialogThreadTitle={dialogThreadTitle}
          dialogThreadComment={dialogThreadComment}
          dialogArticleComment={dialogArticleComment}
          onClickUserName={this.handleOnClickUserName}
        />
        </Div>
    );
  }
}
const mapStateToProps = (store) => ({
  currentThread: store.Top.currentThread,
  categoryArray: store.Top.categoryArray,
  currentCategory: store.Top.currentCategory,
  sortArray: store.Top.sortArray,
  currentSort: store.Top.currentSort,
  currentPaging: store.Top.currentPaging,
  threadArray: store.Top.threadArray,
  articleArray: store.Top.articleArray,
  isDialogOpen: store.Top.isDialogOpen,
  dialogThreadTitle: store.Top.dialogThreadTitle,
  dialogThreadComment: store.Top.dialogThreadComment,
  dialogArticleComment: store.Top.dialogArticleComment,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Top));
