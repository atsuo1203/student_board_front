import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dialog, FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {Div, Title} from '../../../../style/Top/container/contentsParts/ArticleContentsStyle'

class DialogDefault extends Component {
  static propTypes = {
    isDialogOpen: PropTypes.bool.isRequired,
    changeDialog: PropTypes.func.isRequired,
  }

  render() {
    const {isDialogOpen, changeDialog} = this.props
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => changeDialog(false)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={() => changeDialog(false)}
      />
    ]
    return (
      <MuiThemeProvider >
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={isDialogOpen}
          onRequestClose={() => changeDialog(false)}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default DialogDefault;