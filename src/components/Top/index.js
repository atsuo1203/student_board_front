import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import TopAction from '../../modules/Top/action'

import Header from './container/Header'
import CategoryTab from './container/CategoryTab'
import Thread from './container/Thread'

import {Div} from './style'

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
  render() {
    const {userName, isCategoryTabVisible, categoryNameArray, tabName} = this.props
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
        <Thread
          tabName={tabName}
          isCategoryThread={true}
        />
      </Div>
    );
  }
}
const mapStateToProps = (store) => ({
  userName: store.Top.userName,
  isCategoryTabVisible: store.Top.isCategoryTabVisible,
  categoryNameArray: store.Top.categoryNameArray,
  tabName: store.Top.tabName,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
