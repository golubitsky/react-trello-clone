import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import * as firebase from 'firebase';

import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// Add Firebase to reducers
const rootReducer = combineReducers({
  reducer,
  firebase: firebaseStateReducer
});

// Firebase config
const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

// Initialize Firebase
const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: 'react-trello-clone.firebaseapp.com',
  databaseURL: 'https://react-trello-clone.firebaseio.com',
  projectId: 'react-trello-clone',
  storageBucket: ''
};

const rrfConfig = { userProfile: 'users' }; // react-redux-firebase config

// initialize firebase instance
firebase.initializeApp(config); // <- new to v2.*.*

// Add reduxReduxFirebase to compose
const createStoreWithFirebase = compose(
  applyMiddleware(...middleware),
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
)(createStore);

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
