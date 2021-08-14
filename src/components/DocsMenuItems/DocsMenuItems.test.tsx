import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import DocsMenuItems from '.';

describe('DocsMenuItems component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <DocsMenuItems />
      </Router>,
    );
  });

  test('renders links correctly', () => {
    render(
      <Router>
        <DocsMenuItems />
      </Router>,
    );
    const link = screen.getByText('Get Started');
    expect(link).toBeTruthy();
    expect(link?.getAttribute('href')).toEqual('/wallet/get-started');
  });
});
