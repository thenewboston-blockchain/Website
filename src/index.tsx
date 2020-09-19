import React from 'react';
import ReactDOM from 'react-dom';
import {Flip, ToastContainer} from 'react-toastify';

// Styles
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/main.scss';

import App from 'containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
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
  </React.StrictMode>,
  document.getElementById('root'),
);
