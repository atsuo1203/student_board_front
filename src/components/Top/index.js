import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import TopAction from '../../modules/Top/action'

import Header from '../common/Header'
import CategoryTab from './container/CategoryTab'
import Thread from './container/Thread'

import {Div} from './style'

class Top extends Component {
  handleChangeInputValue = event => {
    const {actions} = this.props
    actions.changeInputValue(event.target.value)
  }
  handleChangeName = () => {
    const {actions, inputValue} = this.props
    actions.changeUserName(inputValue)
  }
  render() {
    const {userName} = this.props
    return (
      <Div>
        <Header/>
        <CategoryTab/>
        <Thread/>
      </Div>
    );
  }
}
const mapStateToProps = (store) => ({
  userName: store.Top.userName,
  inputValue: store.Top.inputValue,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TopAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
