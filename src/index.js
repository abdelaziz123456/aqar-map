import React from 'react';
import ReactDOM from 'react-dom';
import './i18n'
import App from './App';
import './index.scss'
import Properties from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './store/authContext';
const store1=createStore(Properties)
ReactDOM.render(
  <AuthContextProvider>
  <Provider store={store1}>
    <App />
  </Provider>
  </AuthContextProvider>
    
  ,
  document.getElementById('root')
);


