import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import Tab from './container/Tab'
import Contents from './container/Contents'

import ArticleModel from '../../models/ArticleModel'
import ThreadModel from '../../models/ThreadModel'

import {Div, TabContainer} from '../../style/Top'
import CommentModel from '../../models/CommentModel';

class Top extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }
  async componentWillMount () {
    console.log('componentWillMount')
    const {actions, name} = this.props
    actions.getCategoryArray()
    actions.getSortArray()
    actions.getThreadArray(1, 1, 1)
    actions.setUserName(name)
  }
  getThreadArrays = () => {
    const threadArrays = {
      1: [
      new ThreadModel({id: 'thread_1', title: 'vipからきました',
      date: '2018/05/28(月) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000, index: 1}),
      new ThreadModel({id: 'thread_2', title: 'なんjから来ました',
      date: '2018/05/29(火) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000, index: 2}),
      new ThreadModel({id: 'thread_3', title: '生き物苦手版サイコー',
      date: '2018/05/30(水) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000, index: 3}),
      ],
      2: [
      new ThreadModel({id: 'thread_4', title: 'pythonこそ最強',
      date: '2018/05/28(月) 21:07:50.001', categoryId: 2,
      commentCount: 100, speed: 1000, index: 1}),
      new ThreadModel({id: 'thread_5', title: 'レポートダルすぎ',
      date: '2018/05/29(火) 21:07:50.001', categoryId: 2,
      commentCount: 100, speed: 1000, index: 2}),
      new ThreadModel({id: 'thread_6', title: '電大の授業タノシイ、タノシイ、',
      date: '2018/05/30(水) 21:07:50.001', categoryId: 2,
      commentCount: 100, speed: 1000, index: 3}),
      ],
    }
    return threadArrays
  }
  // TODO: 選択された時にAPI通信を行い、Articleの配列に追加して行く予定
  handleAddArticle = (threadId) => {
    const {articleArray, actions, currentCategory} = this.props
    // 既にその記事を開いていた場合
    var isExistArticle = false
    articleArray.forEach(article => {
      if (article.id === threadId) {
        isExistArticle = true
      }
    })
    if (!isExistArticle) {
      const article = this.getArticle(threadId)
      articleArray.push(article)
      actions.setArticleArray(articleArray)
    }
      actions.setCurrentThread(true, currentCategory.id)
  }
  // TODO:
  // 現在は決め打ちだが、
  // 本当はthread_idを引数に取って、articleをapiにリクエスト
  getArticle = (threadId) => {
    const article = new ArticleModel({
      id: threadId,
      title: threadId,
      comments: [
        new CommentModel({
          id: 1,
          nickName: 'たかし',
          text: 'お前ら反論してみろ',
          date: '2018/05/28(月) 21:07:50.001',
          threadId: threadId,
          userId: 1,
        }),
        new CommentModel({
          id: 2,
          nickName: 'ぴろゆき',
          text: '>>1 キモ',
          date: '2018/05/28(月) 21:30:50.001',
          threadId: threadId,
          userId: 1,
        }),
      ]
    })
    return article
  }
  handleClickMenu = (categoryId) => {
    const {actions, categoryArray} = this.props
    const category = categoryArray.find(c => {
      return (c.id === categoryId )
    })
    actions.setCurrentCategory(category)
    actions.setCurrentThread(true, category.id)
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
  handleCreateThread = (currentThread) => {
    console.log('handleCreateThread')
    console.log(currentThread)
  }
  handleCreateComment = (currentThread) => {
    console.log('handleCreateComment')
    console.log(currentThread)
  }
  handleReload = (currentThread) => {
    console.log(currentThread)
  }
  handleSort = (sortModel) => {
    const {actions} = this.props
    actions.setCurrentSort(sortModel)
  }
  handleLogout = () => {
    this.props.history.push('/')
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
    const {userName, categoryArray, sortArray,
      currentCategory, currentThread, currentSort,
      threadArrays, articleArray} = this.props
    // 現在のカテゴリのスレッドリスト
    const aCategoryThreadArray = threadArrays[currentCategory.id]
    // 現在の記事
    const currentArticle = (articleArray.length === 0) ? null :
      articleArray.filter(article => String(currentThread.threadId) === String(article.id))[0]
    return (
      <Div>
        <Header
          userName={userName}
          categoryArray={categoryArray}
          currentCategory={currentCategory}
          onClickMenu={this.handleClickMenu}
          onClickLogout={this.handleLogout}
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
          aCategoryThreadArray={aCategoryThreadArray}
          currentThread={currentThread}
          sortArray={sortArray}
          currentSort={currentSort}
          onReload={this.handleReload}
          onCreateThread={this.handleCreateThread}
          onCreateComment={this.handleCreateComment}
          onSort={this.handleSort}
          addArticle={this.handleAddArticle}
          currentArticle={currentArticle}
        />
        </Div>
    );
  }
}
const mapStateToProps = (store) => ({
  userName: store.Top.userName,
  currentThread: store.Top.currentThread,
  categoryArray: store.Top.categoryArray,
  currentCategory: store.Top.currentCategory,
  sortArray: store.Top.sortArray,
  currentSort: store.Top.currentSort,
  threadArrays: store.Top.threadArrays,
  articleArray: store.Top.articleArray,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Top));
