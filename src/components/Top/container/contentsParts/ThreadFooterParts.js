import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div}
from '../../../../style/Top/container/contentsParts/ThreadFooterPartsStyle'

class ThreadFooterParts extends Component {
  static propTypes = {
    currentPaging: PropTypes.number.isRequired,
    onPaging: PropTypes.func.isRequired,
  }

  render() {
    const {currentPaging, onPaging} = this.props
    return (
      <MuiThemeProvider >
        <Div>
          <FlatButton
            style={{margin: '5px'}}
            label="前へ"
            labelStyle={{color: 'white'}}
            backgroundColor='#7ca6ff'
            hoverColor='#7cb6ff'
            onClick={() => onPaging(currentPaging-1)}
          />
          <label style={{position: 'relative'}}>現在: {currentPaging} ページ目</label>
          <FlatButton
            style={{margin: '5px'}}
            label="次へ"
            labelStyle={{color: 'white'}}
            backgroundColor='#7ca6ff'
            hoverColor='#7cb6ff'
            onClick={() => onPaging(currentPaging+1)}
          />
        </Div>
      </MuiThemeProvider>
    );
  }
}
export default ThreadFooterParts;