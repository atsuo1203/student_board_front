import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper, Menu, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div, PaperStyle} from './style/CategoryTabStyle'

class CategoryTab extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
  }
  render() {
    const {open} = this.props
    const result = open ? (
      <Paper style={PaperStyle}>
        <Menu>
          <MenuItem primaryText="Maps" />
          <MenuItem primaryText="Books" />
          <MenuItem primaryText="Flights" />
          <MenuItem primaryText="Apps" />
        </Menu>
      </Paper>
    ) : null
    return (
      <MuiThemeProvider>
        <div>
          {result}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CategoryTab;