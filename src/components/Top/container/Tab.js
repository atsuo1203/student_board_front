import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {AppBar, FlatButton} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {titleStyle, deleteButtonStyle} from './style/TabStyle'

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    isCategoryThread: PropTypes.bool,
    onDelete: PropTypes.func,
  }

  render() {
    const {tabName, isCategoryThread, onDelete} = this.props
    const num = 10
    const appBarStyle = {
      width: String(num)+"%",
      height: '40px',
      background: '#7dff7d',
      margin: '5px',
    }
    const deleteButton = (isCategoryThread===true) ? null : (
      <MuiThemeProvider>
        <IconButton
          onClick={() => onDelete(0)}
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
            title={tabName}
            titleStyle={titleStyle}
            iconElementLeft={<div></div>}
            iconElementRight={deleteButton}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Tab;