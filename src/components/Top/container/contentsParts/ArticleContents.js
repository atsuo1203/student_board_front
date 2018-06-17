import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment'

import {Div, Title} from '../../../../style/Top/container/contentsParts/ArticleContentsStyle'

class ArticleContents extends Component {
  static propTypes = {
    currentArticle: PropTypes.object,
    onClickUserName: PropTypes.func.isRequired,
  }

  articleObj = () => {
    const {currentArticle, onClickUserName} = this.props
    if (currentArticle) {
      return (
        <Div>
          <Title>{currentArticle.title}</Title>
          <Comment comments={currentArticle.comments} onClickUserName={onClickUserName}/>
        </Div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.articleObj()}
      </div>
    );
  }
}
export default ArticleContents;