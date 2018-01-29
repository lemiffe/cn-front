import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App data={{ coins, news }} />,
  document.getElementById('root')
);
registerServiceWorker();
