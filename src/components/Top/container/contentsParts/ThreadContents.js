import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {IdStyle, TitleStyle, SpeedStyle, CountStyle, ChildrenStyle} from './style/ThreadContentsStyle'

class ThreadContents extends Component {
  static propTypes = {
    threads: PropTypes.array,
  }

  threadObj = (thread) => {
    const idObj = (<IdStyle>{thread.index}</IdStyle>)
    const titleObj = (<TitleStyle>{thread.title}</TitleStyle>)
    const speedObj = (<SpeedStyle>{`勢い: ${thread.speed}`}</SpeedStyle>)
    const countObj = (<CountStyle>{`コメント: ${thread.commentCount}`}</CountStyle>)
    return (
      <FlatButton
        style={{position: 'relative', width: '100%', margin: '3px'}}
        key={thread.id}
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
    return (
      <MuiThemeProvider >
        <div>
        {this.threadObjs()}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ThreadContents;