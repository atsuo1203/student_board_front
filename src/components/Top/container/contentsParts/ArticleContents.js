import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment'

import {Div, Title} from '../../../../style/Top/container/contentsParts/ArticleContentsStyle'

class ArticleContents extends Component {
  static propTypes = {
    currentArticle: PropTypes.object,
  }

  articleObj = () => {
    const {currentArticle} = this.props
    console.log(currentArticle)
    if (currentArticle) {
      return (
        <Div>
          <Title>{currentArticle.title}</Title>
          <Comment comments={currentArticle.comments}/>
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