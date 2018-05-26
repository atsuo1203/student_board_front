import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import CategoryTab from './container/CategoryTab'
import ThreadContents from './container/ThreadContents'
import Tab from './container/Tab'

import {Div, Container} from './style'

class Top extends Component {
  componentWillMount () {
    const {actions} = this.props
    const categoryNameArray = this.makeList()
    actions.setCategoryNameArray(categoryNameArray)
  }
  makeList = () => {
    const categoryNameArray = [
      '雑談', '勉強', '恋愛', '部活', '進路',
    ]
    return categoryNameArray
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
  handleSelectThread = (isCategory, name) => {
    console.log(isCategory, name)
  }
  render() {
    const {userName, isCategoryTabVisible, categoryNameArray, threadName} = this.props
    return (
      <Div>
        <Header
          onToggle={this.handleToggle}
          userName={userName}
          />
        <CategoryTab
          open={isCategoryTabVisible}
          categoryNameArray={categoryNameArray}
          onClickMenu={this.handleClickMenu}
        />
        <Container>
          <Tab
            threadName={threadName}
            threadID={'category_hoge'}
            isCategoryThread={true}
            onDelete={this.handleDelete}
            onSelect={this.handleSelectThread}
          />
          <Tab
            threadName={'vipから来ました'}
            threadID={'thread_114'}
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
  categoryNameArray: store.Top.categoryNameArray,
  threadName: store.Top.threadName,
  currentThread: store.Top.currentThread,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
