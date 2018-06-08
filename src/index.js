import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './components/Register';
import PreRegister from './components/PreRegister';
import Login from './components/Login';
import Top from './components/Top';
import reducers from './reducers'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)

ReactDOM.render(
  (<Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'
            render={()=><Login/>} />
          <Route path='/top'
            render={()=><Top name="18FMI33"/>} />
          <Route path='/preRegister'
            render={()=><PreRegister/>} />
          <Route path='/register'
            render={()=><Register/>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root')
);
// registerServiceWorker();
