import React from 'react';
import ReactDOM from 'react-dom';
import './i18n'
import App from './App';
import './index.scss'
import Properties from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store1=createStore(Properties)
ReactDOM.render(
  <Provider store={store1}>
    <App />
  </Provider>
    
  ,
  document.getElementById('root')
);


