import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './pages/App';
import store from './store';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then((registration) => {
        console.log('Service worker registered', registration.scope);
      })
      .catch((error) => console.log(err));
  })
} else {
  console.log('Service worker is not supported by browser');
}

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => console.log('STATE:', store.getState()));
