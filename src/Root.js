import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import Page404 from './components/Page404';

// const Root = ({ store }) => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={() => <App store={store} />} />
//       <Route component={Page404} />
//     </Switch>
//   </BrowserRouter>
// );

import Todos from './Todos';

const Root = ({ store }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Todos store={store} />} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
