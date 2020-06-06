import React from 'react';
import ReactDOM from 'react-dom';

import Teaser from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Teaser />, div);
});
