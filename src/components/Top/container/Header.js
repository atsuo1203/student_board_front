import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, FlatButton} from 'material-ui';

import CategoryTab from './CategoryTab'
import {Title, RightDiv, RightButton, RightButtonText}
from '../../../style/Top/container/HeaderStyle'

class Header extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    categoryArray: PropTypes.array.isRequired,
    currentCategory: PropTypes.object.isRequired,
    onClickMenu: PropTypes.func.isRequired,
    onClickLogout: PropTypes.func.isRequired,
    toProfile: PropTypes.func.isRequired,
  }

  handleClickUserName = () => {
    window.open('http://www.google.com','userProfile')
  }

  handleClickTile = () => {
    // TODO
    // helpページのような所へ飛ばす
    window.open('http://www.google.com','help')
  }

  rightObject = () => {
    const {userName, onClickLogout, toProfile} = this.props
    const profileButton = (
      <FlatButton
        label="プロフィール画面へ"
        labelStyle={RightButtonText}
        onClick={toProfile}
      />
    )
    const logoutButton = (
      <FlatButton
        style={RightButton}
        label="logout"
        labelStyle={RightButtonText}
        onClick={onClickLogout}
      />
    )
    return (
      <div>
        {profileButton}
        {logoutButton}
      </div>
    )
  }

  render() {
    const {categoryArray, currentCategory, onClickMenu} = this.props
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={<span>学生限定掲示板</span>}
            titleStyle={Title}
            onTitleClick={this.handleClickTile}
            iconElementLeft={<CategoryTab
              categoryArray={categoryArray}
              onClickMenu={onClickMenu}
              currentCategory={currentCategory}
              />}
            iconStyleLeft={{position: 'relative',left: '-20px',zIndex: 9999}}
            iconElementRight={this.rightObject()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Header;