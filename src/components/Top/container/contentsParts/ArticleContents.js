import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment'

import {Div, Title} from './style/ArticleContentsStyle'

class ArticleContents extends Component {
  static propTypes = {
  }

  render() {
    return (
      <Div>
        <Title>Title</Title>
        <Comment/>
      </Div>
    );
  }
}
export default ArticleContents;