import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper, Menu, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div, PaperStyle} from './style/CategoryTabStyle'

class CategoryTab extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    categoryNameArray: PropTypes.array.isRequired,
    onClickMenu: PropTypes.func,
  }
  render() {
    const {open, categoryNameArray, onClickMenu} = this.props
    const result = open ? (
      <Paper style={PaperStyle}>
        <Menu>
          {categoryNameArray.map(categoryName =>
            <MenuItem
              key={categoryName}
              primaryText={categoryName}
              onClick={() => onClickMenu(categoryName)}
            />
          )}
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
