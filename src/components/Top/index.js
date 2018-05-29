import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import CategoryTab from './container/CategoryTab'
import Tab from './container/Tab'
import Contents from './container/Contents'

import CategoryModel from '../../models/CategoryModel'
import ThreadModel from '../../models/ThreadModel'

import {Div, Container} from './style'

class Top extends Component {
  componentWillMount () {
    const {actions} = this.props
    const categoryArray = this.makeCategoryList()
    actions.setCategoryArray(categoryArray)
  }
  makeCategoryList = () => {
    const categoryArray = [
      new CategoryModel({id: '1', name: '雑談'}),
      new CategoryModel({id: '2', name: '勉強'}),
      new CategoryModel({id: '3', name: '恋愛'}),
      new CategoryModel({id: '4', name: '部活'}),
      new CategoryModel({id: '5', name: '進路'}),
    ]
    return categoryArray
  }
  makeThreadList = () => {
    const threadArray = [
      new ThreadModel({id: 'thread_1', title: 'vipからきました',
      date: '2018/05/28(月) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000,}),
      new ThreadModel({id: 'thread_2', title: 'なんjから来ました',
      date: '2018/05/29(火) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000,}),
      new ThreadModel({id: 'thread_3', title: '生き物苦手版サイコー',
      date: '2018/05/30(水) 21:07:50.001', categoryId: 1,
      commentCount: 100, speed: 1000,}),
    ]
    return threadArray
  }
  handleChangeInputValue = event => {
    const {actions} = this.props
    actions.changeInputValue(event.target.value)
  }
  handleChangeName = () => {
    const {actions, inputValue} = this.props
    actions.changeUserName(inputValue)
  }
  handleToggle = () => {
    const {actions} = this.props
    const {isCategoryTabVisible} = this.props
    const categoryTabState = !isCategoryTabVisible
    actions.setCategoryTabVisual(categoryTabState)
  }
  handleClickMenu = (categoryId) => {
    const {actions, categoryArray} = this.props
    const category = categoryArray.find(c => {
      return (c.id === categoryId )
    })
    console.log(category)
    actions.setCurrentCategory(category)
    actions.setCurrentThread(true, category.id)
    actions.resetCategoryTabVisual()
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
  render() {
    const {userName, isCategoryTabVisible,
      categoryArray, threadName, currentCategory, currentThread} = this.props
    return (
      <Div>
        <Header
          onToggle={this.handleToggle}
          userName={userName}
          />
        <CategoryTab
          open={isCategoryTabVisible}
          categoryArray={categoryArray}
          onClickMenu={this.handleClickMenu}
        />
        <Container>
          <Tab
            threadName={currentCategory.name}
            threadID={currentCategory.id}
            currentThread={currentThread}
            isCategoryThread={true}
            onDelete={this.handleDelete}
            onSelect={this.handleSelectTab}
          />
          <Tab
            threadName={'vipから来ました'}
            threadID={'thread_114'}
            currentThread={currentThread}
            isCategoryThread={false}
            onDelete={this.handleDelete}
            onSelect={this.handleSelectTab}
          />
        </Container>
        <Contents
          currentThread={currentThread}
          onReload={this.handleReload}
          onCreateThread={this.handleCreateThread}
          onCreateComment={this.handleCreateComment}
        />
        </Div>
    );
  }
}
const mapStateToProps = (store) => ({
  userName: store.Top.userName,
  isCategoryTabVisible: store.Top.isCategoryTabVisible,
  categoryArray: store.Top.categoryArray,
  threadName: store.Top.threadName,
  currentCategory: store.Top.currentCategory,
  currentThread: store.Top.currentThread,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
