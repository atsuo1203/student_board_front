import React, { Component } from 'react';
import {Paper, Menu, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div, PaperStyle} from './style/CategoryTabStyle'

class CategoryTab extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Paper style={PaperStyle}>
            <Menu>
              <MenuItem primaryText="Maps" />
              <MenuItem primaryText="Books" />
              <MenuItem primaryText="Flights" />
              <MenuItem primaryText="Apps" />
            </Menu>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CategoryTab;