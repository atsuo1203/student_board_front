import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BoxDiv, deleteButtonStyles} from './style/TabStyle'

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    isCategoryThread: PropTypes.bool,
  }

  render() {
    const {tabName, isCategoryThread} = this.props
    const deleteButton = (isCategoryThread===true) ? null : (
      <MuiThemeProvider>
        <IconButton
          iconStyle={deleteButtonStyles.icon}
          style={deleteButtonStyles.body}
          onTouchTap={this.handleDelete}
        >
          <Delete />
        </IconButton>
      </MuiThemeProvider>
    )
    return (
      <BoxDiv width={200}>
        {tabName}
        {deleteButton}
      </BoxDiv>
    );
  }
}
export default Tab;