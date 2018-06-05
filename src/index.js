import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
            render={()=><Top name="タカシ"/>} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root')
);
// registerServiceWorker();
