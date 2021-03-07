// https://reactjs.org/docs/javascript-environment-requirements.html
import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Flip, ToastContainer} from 'react-toastify';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import store from 'store';

// Styles
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/main.scss';

import App from 'containers/App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        transition={Flip}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
