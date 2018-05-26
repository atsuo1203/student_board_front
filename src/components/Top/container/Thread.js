import React, { Component } from 'react';

import Tab from './Tab'
import ThreadContents from './ThreadContents'

import {Div} from './style/ThreadStyle'

class Thread extends Component {
  render() {
    return (
      <div>
        <Tab/>
        <ThreadContents/>
      </div>
    );
  }
}
export default Thread;