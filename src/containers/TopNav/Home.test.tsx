import React from 'react';
import ReactDOM from 'react-dom';

import TopNav from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopNav />, div);
});
