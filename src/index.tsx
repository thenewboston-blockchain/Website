import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'normalize.css';
import 'styles/main.scss';

import App from 'containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
