import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {IdStyle, TitleStyle, SpeedStyle, CountStyle, ChildrenStyle} from './style/ThreadContentsStyle'

class ThreadContents extends Component {
  static propTypes = {
  }

  render() {
    const idObj = (<IdStyle>{1}</IdStyle>)
    const titleObj = (<TitleStyle>{'title'}</TitleStyle>)
    const speedObj = (<SpeedStyle>{'勢い: 3000'}</SpeedStyle>)
    const countObj = (<CountStyle>{'コメント: 600'}</CountStyle>)
    return (
      <MuiThemeProvider >
        <FlatButton
          style={{position: 'relative', width: '100%'}}
          children={
          <ChildrenStyle key={1}>
            {idObj}
            {titleObj}
            {speedObj}
            {countObj}
          </ChildrenStyle>}
          backgroundColor='#7ca6ff'
          hoverColor='#7cb6ff'
        />
      </MuiThemeProvider>
    );
  }
}
export default ThreadContents;