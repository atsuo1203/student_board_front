import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Paper, Menu, MenuItem, DropDownMenu } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Div, PaperStyle} from './style/CategoryTabStyle'

class CategoryTab extends Component {
  static propTypes = {
    categoryArray: PropTypes.array.isRequired,
    onClickMenu: PropTypes.func,
  }
  render() {
    const {categoryArray, onClickMenu} = this.props
    console.log(categoryArray)
    return (
      <div>
      </div>
    );
  }
}
export default CategoryTab;
