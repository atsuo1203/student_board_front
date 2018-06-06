import React, { Component } from 'react';
import { connect } from 'react-redux'

import CommonHeader from '../common/CommonHeader'

class Login extends Component {
  render() {
    return (
      <div>
        <CommonHeader title='ログインページ'/>
        login
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
