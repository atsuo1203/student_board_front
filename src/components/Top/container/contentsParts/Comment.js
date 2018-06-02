import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Div, HeaderDiv,
  HeaderID, HeaderName, HeaderDate} from './style/CommentStyle'

class Comment extends Component {
  static propTypes = {
  }

  headerParts = () => {
    return(
      <HeaderDiv>
        <HeaderID>{1}</HeaderID>:
        <HeaderName>たかし</HeaderName>
        <HeaderDate>2018/06/01(金) 08:24:41.26</HeaderDate>
      </HeaderDiv>
    )

  }

  commentParts = () => {
    return (
      <div>
      </div>
    )
  }

  render() {
    return (
      <Div>
        {this.headerParts()}
      </Div>
    );
  }
}
export default Comment;