import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {AppBar} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {titleStyle, deleteButtonStyle} from '../../../style/Top/container/TabStyle'

class Tab extends Component {
  static propTypes = {
    threadName: PropTypes.string.isRequired,
    threadId: PropTypes.any.isRequired,
    currentThread: PropTypes.object.isRequired,
    isCategoryThread: PropTypes.bool,
    onDelete: PropTypes.func,
    onSelect: PropTypes.func,
  }

  render() {
    const {threadName, threadId, currentThread,
      isCategoryThread, onDelete, onSelect} = this.props
    const isCurrentThread =
      ((threadId === currentThread.threadId) && (currentThread.isCategory === isCategoryThread))
    const num = 20
    const appBarStyle = {
      display: 'flex',
      width: String(num)+'vw',
      height: '40px',
      background: '#7dff7d',
      margin: '3px',
      opacity: isCurrentThread ? 1 : 0.5
    }
    const deleteButton = (isCategoryThread===true) ? null : (
      <MuiThemeProvider>
        <IconButton
          onClick={() => onDelete(threadId)}
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
            onTitleClick={() => onSelect(isCategoryThread, threadId)}
            iconElementLeft={<div></div>}
            iconElementRight={deleteButton}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Tab;