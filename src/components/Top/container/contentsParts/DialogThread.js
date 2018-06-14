import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DialogThread extends Component {
  static propTypes = {
    onChangeTitle: PropTypes.func.isRequired,
    onChangeComment: PropTypes.func.isRequired,
  }

  render() {
    const {onChangeTitle, onChangeComment} = this.props
    return (
      <MuiThemeProvider >
        <div>
        <TextField
          hintText="スレッドのタイトルを入力してください。"
          style={{position: 'relative', width: '100%'}}
          onChange={onChangeTitle}
        /><br/>
        <TextField
          hintText="コメントを入力してください。このコメントが記事の初めのコメントになります。"
          // hintStyle={{position:'relative' ,textAlign: 'top', textAlign: 'left', marginTop: '10px'}}
          multiLine={true}
          style={{position: 'relative', width: '100%'}}
          rows={8}
          cols={20}
          onChange={onChangeComment}
        /><br/>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default DialogThread;