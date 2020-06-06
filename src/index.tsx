import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'normalize.css';
import 'styles/colors.scss';
import 'styles/index.scss';

import Teaser from 'containers/Teaser';

ReactDOM.render(
  <React.StrictMode>
    <Teaser />
  </React.StrictMode>,
  document.getElementById('root'),
);
