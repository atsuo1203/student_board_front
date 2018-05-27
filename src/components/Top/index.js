import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import CategoryTab from './container/CategoryTab'
import ThreadContents from './container/ThreadContents'
import Tab from './container/Tab'
import CategoryModel from '../../models/CategoryModel'

import {Div, Container} from './style'

class Top extends Component {
  componentWillMount () {
    const {actions} = this.props
    const categoryArray = this.makeList()
    actions.setCategoryArray(categoryArray)
  }
  makeList = () => {
    const categoryArray = [
      new CategoryModel({id: 1, name: '雑談'}),
      new CategoryModel({id: 2, name: '勉強'}),
      new CategoryModel({id: 3, name: '恋愛'}),
      new CategoryModel({id: 4, name: '部活'}),
      new CategoryModel({id: 5, name: '進路'}),
    ]
    return categoryArray
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
  handleClickMenu = (categoryName) => {
    const {actions} = this.props
    actions.setTabName(categoryName)
    actions.resetCategoryTabVisual()
  }
  handleDelete = (threadID) => {
    console.log(threadID)
  }
  handleSelectThread = (isCategory, threadID) => {
    const {actions} = this.props
    actions.setCurrentThread(isCategory, threadID)
  }
  render() {
    const {userName, isCategoryTabVisible,
      categoryArray, threadName, currentThread} = this.props
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
            threadName={threadName}
            threadID={'category_hoge'}
            currentThread={currentThread}
            isCategoryThread={true}
            onDelete={this.handleDelete}
            onSelect={this.handleSelectThread}
          />
          <Tab
            threadName={'vipから来ました'}
            threadID={'thread_114'}
            currentThread={currentThread}
            isCategoryThread={false}
            onDelete={this.handleDelete}
            onSelect={this.handleSelectThread}
          />
        </Container>
        <ThreadContents />
        </Div>
    );
  }
}
const mapStateToProps = (store) => ({
  userName: store.Top.userName,
  isCategoryTabVisible: store.Top.isCategoryTabVisible,
  categoryArray: store.Top.categoryArray,
  threadName: store.Top.threadName,
  currentThread: store.Top.currentThread,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
