import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, IconButton, NavigationClose, FlatButton} from 'material-ui';

import {Div, Span} from './style'

class Header extends Component {
  static propTypes = {
    onToggle: PropTypes.func
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={<span>Title</span>}
            titleStyle={{textAlign: "center"}}
            iconElementRight={<FlatButton label="Save" />}
            // onTitleClick={this.props.onToggle}
            onLeftIconButtonClick={this.props.onToggle}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Header;