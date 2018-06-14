import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {IconButton, RaisedButton, MenuItem, DropDownMenu} from 'material-ui';
import Cached from 'material-ui/svg-icons/action/cached';
import Add from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {reloadButtonStyle, createButtonStyle }
from '../../../../style/Top/container/contentsParts/HeadStyle'

export class ReloadButton extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    onReload: PropTypes.func.isRequired,
  }
  render() {
    const {currentThread, onReload} = this.props
    return (
      <MuiThemeProvider>
        <IconButton
          onClick={() => onReload(currentThread)}
          style={reloadButtonStyle}
        >
          <Cached />
        </IconButton>
      </MuiThemeProvider>
    );
  }
}

export class CreateButton extends Component {
  static propTypes = {
    currentThread: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    onChangeDialog: PropTypes.func.isRequired,
  }
  render() {
    const {label, onChangeDialog} = this.props
    return (
      <RaisedButton
        onClick={() => onChangeDialog(true)}
        label={label}
        labelPosition={'before'}
        primary={true}
        icon={<Add />}
        style={createButtonStyle.button}
        labelStyle={createButtonStyle.buttonText}
      />
    );
  }
}

export class SortButton extends Component {
  static propTypes = {
    sortArray: PropTypes.array.isRequired,
    currentSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
  }
  render() {
    const {sortArray, currentSort, onSort} = this.props
    const menuItemList = []
    sortArray.forEach(sortModel => {
      menuItemList.push(<MenuItem
        key={String(sortModel.id)}
        value={String(sortModel.id)}
        primaryText={sortModel.name}
        onClick={() => onSort(sortModel)}
      />)
    });
    return (
      <DropDownMenu
        value={String(currentSort.id)}
        style={{transform: 'scale(0.9)', position: 'relative', top: '-15px'}}
        underlineStyle={{background: '#000000'}}
        iconStyle={{fill: '#000000'}}
      >
        {menuItemList}
      </DropDownMenu>
    );
  }
}
