import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './Login';
import PreRegister from './PreRegister';
import Register from './Register';
import Top from './Top';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Login/>} />
          <Route path='/preRegister' render={()=><PreRegister/>} />
          <Route path='/register' render={()=><Register/>} />

          {(() => {
            if (localStorage.webToken) {
              return (
                <Switch>
                  <Route path='/top' render={()=><Top/>} />
                  <Route path='/profile' render={()=><Profile/>} />
                </Switch>
              )
            } else {
              return (
                <Redirect to='/' />
              )
            }
          })()}
        </Switch>
      </div>
    )
  }
}

// const mapStateToProps = (store) => ({
// })

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(LoginAction, dispatch)
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default App;