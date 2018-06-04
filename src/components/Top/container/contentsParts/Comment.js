import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Div, HeaderDiv,
  HeaderID, HeaderName, HeaderDate,
  CommentDiv} from './style/CommentStyle'

class Comment extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  headerParts = () => {
    return(
      <HeaderDiv>
        <HeaderID>{1}</HeaderID>:
        <HeaderName>{'たかし'}</HeaderName>
        <HeaderDate>{'2018/06/01(金) 08:24:41.26'}</HeaderDate>
      </HeaderDiv>
    )

  }

  textParts = () => {
    return (
      <CommentDiv>
        {'我こそは最強なり'}
      </CommentDiv>
    )
  }

  commentObj = () => {
    return(
      <Div>
        {this.headerParts()}
        {this.textParts()}
      </Div>
    )
  }


  render() {
    return (
      <div>
        {this.commentObj()}
      </div>
    );
  }
}
export default Comment;