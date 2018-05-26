import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {AppBar, FlatButton} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {titleStyle, deleteButtonStyle} from './style/TabStyle'

class Tab extends Component {
  static propTypes = {
    threadName: PropTypes.string.isRequired,
    threadID: PropTypes.string.isRequired,
    isCategoryThread: PropTypes.bool,
    onDelete: PropTypes.func,
    onSelect: PropTypes.func,
  }

  render() {
    const {threadName, threadID, isCategoryThread, onDelete, onSelect} = this.props
    const num = 20
    const appBarStyle = {
      display: 'flex',
      width: String(num)+'vw',
      height: '40px',
      background: '#7dff7d',
      margin: '5px',
    }
    const deleteButton = (isCategoryThread===true) ? null : (
      <MuiThemeProvider>
        <IconButton
          onClick={() => onDelete(threadID)}
          iconStyle={deleteButtonStyle.smallIcon}
          style={deleteButtonStyle.small}
        >
          <Delete />
        </IconButton>
      </MuiThemeProvider>
    )
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            style={appBarStyle}
            title={threadName}
            titleStyle={titleStyle}
            onTitleClick={() => onSelect(isCategoryThread, threadID)}
            iconElementLeft={<div></div>}
            iconElementRight={deleteButton}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Tab;