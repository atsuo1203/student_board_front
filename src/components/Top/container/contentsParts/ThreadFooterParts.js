import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div}
from '../../../../style/Top/container/contentsParts/ThreadFooterPartsStyle'

class ThreadFooterParts extends Component {
  static propTypes = {
  }

  render() {
    return (
      <MuiThemeProvider >
        <Div>
          <FlatButton
            style={{margin: '5px'}}
            label="前へ"
            labelStyle={{color: 'white'}}
            backgroundColor='#7ca6ff'
            hoverColor='#7cb6ff'
          />
          <label style={{position: 'relative'}}>現在: {1} ページ目</label>
          <FlatButton
            style={{margin: '5px'}}
            label="次へ"
            labelStyle={{color: 'white'}}
            backgroundColor='#7ca6ff'
            hoverColor='#7cb6ff'
          />
        </Div>
      </MuiThemeProvider>
    );
  }
}
export default ThreadFooterParts;