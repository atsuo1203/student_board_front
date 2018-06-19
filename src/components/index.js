import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './Login';
import ProvRegister from './ProvRegister';
import Register from './Register';
import Top from './Top';
import OtherProfile from './OtherProfile';
import Profile from './Profile';
import Password from './Password';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Login/>} />
          <Route exact path='/provRegister' render={()=><ProvRegister/>} />
          <Route exact path='/register' render={()=><Register/>} />

          {(() => {
            if (localStorage.authorization) {
              return (
                <Switch>
                  <Route exact path='/top' render={()=><Top/>} />
                  <Route exact path='/otherProfile/:userId' render={()=><OtherProfile/>} />
                  <Route exact path='/profile' render={()=><Profile/>} />
                  <Route exact path='/password' render={()=><Password/>} />
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