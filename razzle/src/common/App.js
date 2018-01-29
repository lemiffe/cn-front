// TODO:
// - Mobile menu
// - Dark / White mode
// - Coins tag
// - Clean CSS typography, look at sizing patterns, vertical white-space patterns
// - CSS grid
// - clean up variables spacing patterns?
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'material-design-icons/iconfont/material-icons.css';
import './styles/index.css';

const LoadableHome = Loadable({
  loader: () => import('./pages/Home/Home'),
  loading: () => null
});

const App = () => (
  <Fragment>
    <Helmet>
      <title>CN App</title>
      <meta name="description" content="Cool description about CN App" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={LoadableHome} />
    </Switch>
  </Fragment>
);

export default App;
