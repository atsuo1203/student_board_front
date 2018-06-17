import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Dialog, FlatButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DialogDefault extends Component {
  static propTypes = {
    isDialogOpen: PropTypes.bool.isRequired,
    onChangeDialog: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    dialogChild: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    dialogThreadTitle: PropTypes.string.isRequired,
    dialogThreadComment: PropTypes.string.isRequired,
    dialogArticleComment: PropTypes.string.isRequired,
    isThreadDialog: PropTypes.bool.isRequired,
  }

  handleSubmit = () => {
    const {onChangeDialog, onCreate,
      dialogThreadTitle, dialogThreadComment, dialogArticleComment, isThreadDialog} = this.props
    if (isThreadDialog) {
      if ((dialogThreadTitle === undefined) || (dialogThreadTitle === "")) {
        window.confirm('タイトルを入力してください')
        return
      }
      if (dialogThreadTitle.length > 40) {
        window.confirm('タイトルは40文字以内にしてください')
        return
      }
      if ((dialogThreadComment === undefined) || (dialogThreadComment === "")) {
        window.confirm('コメントを入力してください')
        return
      }
      if (dialogThreadComment.length > 200) {
        window.confirm('コメントは200文字以内にしてください')
        return
      }
    } else {
      if ((dialogArticleComment === undefined) || (dialogArticleComment === "")) {
        window.confirm('コメントを入力してください')
        return
      }
      if (dialogArticleComment.length > 200) {
        window.confirm('コメントは200文字以内にしてください')
        return
      }
    }
    onChangeDialog(false)
    onCreate()
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