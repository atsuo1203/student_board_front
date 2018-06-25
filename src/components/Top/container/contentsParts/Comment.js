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

  headerParts = (comment, index) => {
    const {onClickUserName} = this.props
    console.log('comment2', comment)
    return(
      <HeaderDiv>
        <HeaderID>{index+1}</HeaderID>:
        <HeaderName onClick={() => onClickUserName(comment.userId)}>
          {comment.nickName}</HeaderName>
        <HeaderDate>{comment.create_at}</HeaderDate>
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

  commentObj = (comment, index) => {
    console.log('comment', comment)
    return(
      <Div key={String(comment.id)}>
        {this.headerParts(comment, index)}
        {this.textParts(comment)}
      </Div>
    )
  }

  commentObjs = () => {
    const {comments} = this.props
    if (comments === undefined) { return(<div></div>) }
    const result = []
    comments.forEach((comment, index) => {
      result.push(this.commentObj(comment, index))
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