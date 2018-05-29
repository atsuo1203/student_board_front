import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper, Menu, MenuItem, DropDownMenu } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div, PaperStyle} from './style/CategoryTabStyle'

class CategoryTab extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    categoryArray: PropTypes.array.isRequired,
    onClickMenu: PropTypes.func,
  }
  render() {
    const {open, categoryArray, onClickMenu} = this.props
    const result = open ? (
      <Paper style={PaperStyle}>
        <Menu>
          {categoryArray.map(category =>
            <MenuItem
              key={category.id}
              primaryText={category.name}
              onClick={() => onClickMenu(category.id)}
            />
          )}
        </Menu>
      </Paper>
    ) : null
    return (
      <MuiThemeProvider>
        <DropDownMenu value={1} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="雑談" />
          <MenuItem value={2} primaryText="勉強" />
        </DropDownMenu>
      </MuiThemeProvider>
    );
  }
}
export default CategoryTab;
