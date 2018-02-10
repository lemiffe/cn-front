import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import configureStore from './store/configureStore';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={configureStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
      div
    );
  });
});
