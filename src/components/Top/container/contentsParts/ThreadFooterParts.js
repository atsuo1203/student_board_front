import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div}
from '../../../../style/Top/container/contentsParts/ThreadFooterPartsStyle'

class ThreadFooterParts extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    onPaging: PropTypes.func.isRequired,
  }

  render() {
    const {currentPage, onPaging} = this.props
    return (
      <MuiThemeProvider >
        <Div>
          <FlatButton
            style={{margin: '5px'}}
            label="前へ"
            labelStyle={{color: 'white'}}
            backgroundColor='#7ca6ff'
            hoverColor='#7cb6ff'
            onClick={() => onPaging(currentPage-1)}
          />
          <label style={{position: 'relative'}}>現在: {currentPage} ページ目</label>
          <FlatButton
            style={{margin: '5px'}}
            label="次へ"
            labelStyle={{color: 'white'}}
            backgroundColor='#7ca6ff'
            hoverColor='#7cb6ff'
            onClick={() => onPaging(currentPage+1)}
          />
        </Div>
      </MuiThemeProvider>
    );
  }
}
export default ThreadFooterParts;