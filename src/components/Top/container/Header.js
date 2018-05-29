import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, FlatButton} from 'material-ui';

import CategoryTab from './CategoryTab'
import {Title, RightUserName, RightButton, RightButtonText} from './style/HeaderStyle'

class Header extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    categoryArray: PropTypes.array.isRequired,
    onClickMenu: PropTypes.func.isRequired,
  }

  handleClickUserName = () => {
    window.open('http://www.google.com','userProfile')
  }

  handleClieckLogoutButton = () => {
    console.log('hogehgoe')
  }

  handleClickTile = () => {
    // TODO
    // helpページのような所へ飛ばす
    // window.open('http://www.google.com','userProfile')
  }

  rightObject = () => {
    const {userName} = this.props
    const logoutButton = (
      <FlatButton
        style={RightButton}
        label="logout"
        labelStyle={RightButtonText}
        onClick={this.handleClieckLogoutButton}
      />
    )
    return (
      <div>
        <RightUserName onClick={this.handleClickUserName}>
          {userName}
         </RightUserName>
        {logoutButton}
      </div>
    )
  }

  render() {
    const {categoryArray, onClickMenu} = this.props
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={<span>学生限定掲示板</span>}
            titleStyle={Title}
            onTitleClick={this.handleClickTile}
            iconElementLeft={<CategoryTab
              categoryArray={categoryArray}
              onClickMenu={onClickMenu}/>}
            iconStyleLeft={{position: 'relative',left: '-20px',}}
            iconElementRight={this.rightObject()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Header;