import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab'

import {Div} from './style/ThreadStyle'

class Thread extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    isCategoryThread: PropTypes.bool,
    onDelete: PropTypes.func,
  }
  render() {
    const {tabName, isCategoryThread, onDelete} = this.props
    return (
      <div>
        <Tab
          tabName={tabName}
          isCategoryThread={isCategoryThread}
          onDelete={onDelete}
        />
      </div>
    );
  }
}
export default Thread;