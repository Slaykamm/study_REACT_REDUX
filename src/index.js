import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxApp from './App-redux';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers'

//--------------------------REDUX NOTES


const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
