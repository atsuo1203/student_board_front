import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './components/Top';
import reducers from './reducers'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Top />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
