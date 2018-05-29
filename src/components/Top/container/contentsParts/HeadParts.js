import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {IconButton, RaisedButton, MenuItem, DropDownMenu} from 'material-ui';
import Cached from 'material-ui/svg-icons/action/cached';
import Add from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {reloadButtonStyle, createButtonStyle } from './style/HeadStyle'

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
    onCreate: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  }
  render() {
    const {currentThread, onCreate, label} = this.props
    return (
      <RaisedButton
        onClick={() => onCreate(currentThread)}
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
    onSort: PropTypes.func.isRequired,
  }
  render() {
    const {onSort} = this.props
    return (
      <DropDownMenu
        value={1}
        style={{transform: 'scale(0.9)', position: 'relative', top: '5px'}}
        underlineStyle={{background: '#000000'}}
        iconStyle={{fill: '#000000'}}
      >
        <MenuItem
          key={1}
          value={1}
          primaryText={'ID順'}
          onClick={() => onSort(1)}
        />
        <MenuItem
          key={2}
          value={2}
          primaryText={'人気順'}
          onClick={() => onSort(2)}
        />
      </DropDownMenu>
    );
  }
}
