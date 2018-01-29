import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { Capture } from 'react-loadable';
import App from '../../common/App';

export const renderReactMiddleware = async (req, res, next) => {
  try {
    const { store } = res.locals;
    const routerContext = {};
    const modules = [];
    const appMarkup = renderToString(
      <Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter context={routerContext} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      </Capture>
    );
    const helmet = Helmet.renderStatic();
    const appState = store.getState();
    res.locals = { appMarkup, appState, routerContext, helmet, modules };
  } catch (err) {
    next(err);
  }

  next();
};
