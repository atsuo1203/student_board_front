import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MenuItem, DropDownMenu } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CategoryTab extends Component {
  static propTypes = {
    categoryArray: PropTypes.array.isRequired,
    currentCategory: PropTypes.object.isRequired,
    onClickMenu: PropTypes.func,
  }
  render() {
    const {categoryArray, currentCategory, onClickMenu} = this.props
    const result = []
    categoryArray.forEach(category => {
      result.push(<MenuItem
        key={category.id}
        value={String(category.id)}
        primaryText={category.name}
        onClick={() => onClickMenu(category.id)}
        />)
    });
    return (
      <MuiThemeProvider>
        <DropDownMenu
          value={String(currentCategory.id)}
          style={{position: 'relative', left: '7px',}}
        >
          {result}
        </DropDownMenu>
      </MuiThemeProvider>
    );
  }
}
export default CategoryTab;
