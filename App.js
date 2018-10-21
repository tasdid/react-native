import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAHGbpiyXKzBQrOhnHTsbV7snytwzFd0Cc',
      authDomain: 'manager-c8ecd.firebaseapp.com',
      databaseURL: 'https://manager-c8ecd.firebaseio.com',
      projectId: 'manager-c8ecd',
      storageBucket: 'manager-c8ecd.appspot.com',
      messagingSenderId: '878851665563'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
