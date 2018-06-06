import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CommonHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const {title} = this.props
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            style={{}}
            title={<div>{title}</div>}
            titleStyle={{textAlign: 'center'}}
            iconElementLeft={<div></div>}
            iconElementRight={<div></div>}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CommonHeader;