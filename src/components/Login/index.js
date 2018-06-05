import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
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
