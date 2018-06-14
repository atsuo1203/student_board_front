import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dialog, FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DialogThread from './DialogThread'

class DialogDefault extends Component {
  static propTypes = {
    isDialogOpen: PropTypes.bool.isRequired,
    onChangeDialog: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
  }

  handleSubmit = () => {
    const {onChangeDialog, onCreate} = this.props
    onChangeDialog(false)
    onCreate('hogehoge')
  }

  render() {
    const {isDialogOpen, onChangeDialog} = this.props
    const actions = [
      <FlatButton
        label="キャンセル"
        primary={true}
        onClick={() => onChangeDialog(false)}
      />,
      <FlatButton
        label="作成"
        primary={true}
        onClick={this.handleSubmit}
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
          onRequestClose={() => onChangeDialog(false)}
          style={{textAlign: 'center'}}
          children={<DialogThread />}
        >
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default DialogDefault;