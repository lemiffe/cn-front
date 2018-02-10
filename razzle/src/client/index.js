import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import App from '../common/App';
import { preloadedStateWindowKey } from '../common/constants';

const store = configureStore(window[preloadedStateWindowKey]);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log(`SW registered: ${registration}`);
      })
      .catch(error => {
        console.warn(`SW registration failed: ${error}`);
      });
  });
}
