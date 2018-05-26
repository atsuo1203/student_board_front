import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, FlatButton} from 'material-ui';

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
            onLeftIconButtonClick={this.props.onToggle}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Header;