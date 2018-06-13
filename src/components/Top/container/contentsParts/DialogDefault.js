import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dialog, FlatButton, RaisedButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {Div, Title} from '../../../../style/Top/container/contentsParts/ArticleContentsStyle'

class DialogDefault extends Component {
  static propTypes = {
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ]
    return (
      <MuiThemeProvider >
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default DialogDefault;