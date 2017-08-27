import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Page404 from './Page404';

const App = () => <div>Hello world!</div>;

export default () =>
  (
    <div className="App">
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
