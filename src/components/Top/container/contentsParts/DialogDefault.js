import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dialog, FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DialogDefault extends Component {
  static propTypes = {
    isDialogOpen: PropTypes.bool.isRequired,
    onChangeDialog: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    currentThread: PropTypes.object.isRequired,
    dialogChild: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
  }

  handleSubmit = () => {
    const {onChangeDialog, onCreate, currentThread} = this.props
    onChangeDialog(false)
    onCreate(currentThread)
  }

  render() {
    const {isDialogOpen, onChangeDialog, dialogChild, label} = this.props
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
          title={label}
          actions={actions}
          modal={false}
          open={isDialogOpen}
          onRequestClose={() => onChangeDialog(false)}
          style={{textAlign: 'center'}}
          children={dialogChild}
        >
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default DialogDefault;