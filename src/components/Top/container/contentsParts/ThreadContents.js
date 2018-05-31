import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {IdStyle, TitleStyle, SpeedStyle, CountStyle, ChildrenStyle} from './style/ThreadContentsStyle'

class ThreadContents extends Component {
  static propTypes = {
    threads: PropTypes.array.isRequired,
  }

  threadObj = (thread) => {
    console.log(thread)
    const idObj = (<IdStyle>{thread.index}</IdStyle>)
    const titleObj = (<TitleStyle>{thread.title}</TitleStyle>)
    const speedObj = (<SpeedStyle>{`勢い: ${thread.speed}`}</SpeedStyle>)
    const countObj = (<CountStyle>{`コメント: ${thread.commentCount}`}</CountStyle>)
    return (
      <FlatButton
        style={{position: 'relative', width: '100%'}}
        children={
        <ChildrenStyle key={thread.id}>
          {idObj}
          {titleObj}
          {speedObj}
          {countObj}
        </ChildrenStyle>}
        backgroundColor='#7ca6ff'
        hoverColor='#7cb6ff'
      />
    )
  }

  threadObjs = () => {
    const {threads} = this.props
    if (threads === undefined){
      return (<div></div>)
    }
    var result = []
    threads.forEach(thread => {
      result.push(this.threadObj(thread))
    });
    return result
  }

  render() {
    const {threads} = this.props
    console.log(threads[0].index)
    return (
      <MuiThemeProvider >
        {this.threadObjs()}
      </MuiThemeProvider>
    );
  }
}
export default ThreadContents;