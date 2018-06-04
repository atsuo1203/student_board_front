import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import Tab from './container/Tab'
import Contents from './container/Contents'

import ArticleModel from '../../models/ArticleModel'
import CategoryModel from '../../models/CategoryModel'
import SortModel from '../../models/SortModel'
import ThreadModel from '../../models/ThreadModel'

import {Div, TabContainer} from './style'
import CommentModel from '../../models/CommentModel';

class Top extends Component {
  componentWillMount () {
    const {actions} = this.props
    const categoryArray = this.getCategoryArray()
    const sortArray = this.getSortArray()
    const threadArrays = this.getThreadArrays()
    actions.setCategoryArray(categoryArray)
    actions.setSortArray(sortArray)
    actions.setThreadArrays(threadArrays)
  }
  getCategoryArray = () => {
    const categoryArray = [
      new CategoryModel({id: 1, name: '雑談'}),
      new CategoryModel({id: 2, name: '勉強'}),
      new CategoryModel({id: 3, name: '恋愛'}),
      new CategoryModel({id: 4, name: '部活'}),
      new CategoryModel({id: 5, name: '進路'}),
    ]
    return categoryArray
  }
  getSortArray = () => {
    const sortArray = [
      new SortModel({id: 1, name: 'ID昇順'}),
      new SortModel({id: 2, name: 'ID降順'}),
      new SortModel({id: 3, name: '人気昇順'}),
      new SortModel({id: 4, name: '人気降順'}),
      new SortModel({id: 5, name: 'コメント数昇順'}),
      new SortModel({id: 6, name: 'コメント数降順'}),
    ]
    return sortArray
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
    console.log(threadId)
    // const {articleArray, actions} = this.props
    // // 既にその記事を開いていた場合
    // var isExistArticle = false
    // articleArray.forEach(article => {
    //   if (article.id === threadId) {
    //     isExistArticle = true
    //   }
    // })
    // if (isExistArticle) {
    //   actions.setCurrentThread(false, threadId)
    // } else {
    //   const article = this.getArticle(threadId)
    //   articleArray.push(article)
    //   actions.setArticleArray(articleArray)
    // }
  }
  // TODO:
  // 現在は決め打ちだが、
  // 本当はthread_idを引数に取って、articleをapiにリクエスト
  getArticle = (threadId) => {
    const article = new ArticleModel({
      id: threadId,
      title: 'Vipから来ました',
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
  handleDelete = (threadID) => {
    console.log(threadID)
  }
  handleSelectTab = (isCategory, threadID) => {
    const {actions} = this.props
    actions.setCurrentThread(isCategory, threadID)
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
  makeTabs = () => {
    const {currentThread, articleArray} = this.props
    const tabs = []
    articleArray.forEach(article => {
      tabs.push(<Tab
        threadName={article.title}
        threadID={article.id}
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
    console.log(articleArray)
    // 現在のカテゴリのスレッドリスト
    const aCategoryThreadArray = threadArrays[currentCategory.id]
    return (
      <Div>
        <Header
          userName={userName}
          categoryArray={categoryArray}
          currentCategory={currentCategory}
          onClickMenu={this.handleClickMenu}
          />
        <TabContainer>
          <Tab
            threadName={currentCategory.name}
            threadID={currentCategory.id}
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

export default connect(mapStateToProps, mapDispatchToProps)(Top);
