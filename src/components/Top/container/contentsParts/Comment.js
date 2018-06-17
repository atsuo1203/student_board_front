import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Div, HeaderDiv,
  HeaderID, HeaderName, HeaderDate,
  TextDiv} from '../../../../style/Top/container/contentsParts/CommentStyle'

class Comment extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onClickUserName: PropTypes.func.isRequired,
  }

  headerParts = (comment) => {
    const {onClickUserName} = this.props
    return(
      <HeaderDiv>
        <HeaderID>{comment.id}</HeaderID>:
        <HeaderName onClick={() => onClickUserName(comment.userId)}>
          {comment.nickName}</HeaderName>
        <HeaderDate>{comment.date}</HeaderDate>
      </HeaderDiv>
    )

  }

  textParts = (comment) => {
    return (
      <TextDiv>
        {comment.text}
      </TextDiv>
    )
  }

  commentObj = (comment) => {
    return(
      <Div key={comment.id}>
        {this.headerParts(comment)}
        {this.textParts(comment)}
      </Div>
    )
  }

  commentObjs = () => {
    const {comments} = this.props
    if (comments === undefined) { return(<div></div>) }
    const result = []
    comments.forEach(comment => {
      result.push(this.commentObj(comment))
    })
    return result
  }

  render() {
    return (
      <div>
        {this.commentObjs()}
      </div>
    );
  }
}
export default Comment;