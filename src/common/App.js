// TODO:
// - Mobile menu
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'material-design-icons/iconfont/material-icons.css';
import './styles/index.css';
import { Home } from './pages/Home/Home';
import { ArticleDetail } from './pages/ArticleDetail/ArticleDetail';
import { CreateArticle } from './pages/CreateArticle/CreateArticle';
import { PageNotFound404 } from './pages/PageNotFound/PageNotFound';

const App = () => (
  <Fragment>
    <Helmet htmlAttributes={{ class: 'theme--sunshine' }}>
      <title>CN App</title>
      <meta name="description" content="Cool description about CN App" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/p/:articleId" component={ArticleDetail} />
      <Route exact path="/create" component={CreateArticle} />
      <Route component={PageNotFound404} />
    </Switch>
  </Fragment>
);

export default App;
