import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DialogArticle extends Component {
  static propTypes = {
    onChangeComment: PropTypes.func.isRequired,
  }

  render() {
    const {onChangeComment} = this.props
    return (
      <MuiThemeProvider >
        <div>
        <TextField
          hintText={<div>
            * コメントを入力してください。記事にコメントが追加されます。<br/> 例: <br/> >>1 一理ある<br/>
            * このようにコメント番号を指定してその人に対して返信などを送ります。必ず指定をしなくてはいけない訳ではありません。
          </div>}
          hintStyle={{textAlign: 'left'}}
          // hintStyle={{position:'relative' ,textAlign: 'top', textAlign: 'left', marginTop: '10px'}
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
export default DialogArticle;