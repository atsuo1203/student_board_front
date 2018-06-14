import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DialogThread extends Component {
  static propTypes = {
  }

  render() {
    return (
      <MuiThemeProvider >
        <TextField
          hintText="スレッドのタイトルを入力してください。"
          style={{position: 'relative', width: '100%'}}
        /><br/>
        <TextField
          hintText="コメントを入力してください。このコメントが記事の初めのコメントになります。"
          multiLine={true}
          style={{position: 'relative', width: '100%'}}
          rows={8}
          cols={20}
        /><br/>
      </MuiThemeProvider>
    );
  }
}
export default DialogThread;