import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from "redux-saga";

import Register from './components/Register';
import PreRegister from './components/PreRegister';
import Login from './components/Login';
import Top from './components/Top';
import {rootSaga} from './sagas';
import reducers from './reducers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const applyMiddlewareWrap = applyMiddleware(sagaMiddleware)
const store = createStore(reducers, applyMiddlewareWrap)
sagaMiddleware.run(rootSaga)

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
