import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './Login';
import ProvRegister from './ProvRegister';
import Register from './Register';
import Top from './Top';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Login/>} />
          <Route path='/provRegister' render={()=><ProvRegister/>} />
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

export default App;