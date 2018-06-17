import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from "redux-saga";

import App from './components'
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
          <Route path='/' render={()=><App/>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root')
);
// registerServiceWorker();
