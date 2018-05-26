import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab'
import ThreadContents from './ThreadContents'

import {Div} from './style/ThreadStyle'

class Thread extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    isCategoryThread: PropTypes.bool,
  }
  render() {
    const {tabName, isCategoryThread} = this.props
    return (
      <div>
        <Tab
          tabName={tabName}
          isCategoryThread={isCategoryThread}
        />
        <ThreadContents/>
      </div>
    );
  }
}
export default Thread;