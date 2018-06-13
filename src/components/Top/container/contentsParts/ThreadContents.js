import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ThreadFooterParts from './ThreadFooterParts'
import DialogDefault from './DialogDefault'

import {IdStyle, TitleStyle, SpeedStyle, CountStyle, ChildrenStyle}
from '../../../../style/Top/container/contentsParts/ThreadContentsStyle'

class ThreadContents extends Component {
  static propTypes = {
    threads: PropTypes.array,
    addArticle: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPaging: PropTypes.func.isRequired,
  }

  threadObj = (thread) => {
    const {addArticle} = this.props
    const idObj = (<IdStyle>{thread.index}</IdStyle>)
    const titleObj = (<TitleStyle>{thread.title}</TitleStyle>)
    const speedObj = (<SpeedStyle>{`勢い: ${thread.speed}`}</SpeedStyle>)
    const countObj = (<CountStyle>{`コメント: ${thread.commentCount}`}</CountStyle>)
    return (
      <FlatButton
        style={{position: 'relative', width: '100%', margin: '3px'}}
        key={thread.id}
        onClick={() => addArticle(thread.id)}
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
    const {currentPage, onPaging} = this.props
    return (
      <MuiThemeProvider >
        <div>
        {this.threadObjs()}
        <ThreadFooterParts currentPage={currentPage} onPaging={onPaging}/>
        <br/>
        <DialogDefault />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ThreadContents;