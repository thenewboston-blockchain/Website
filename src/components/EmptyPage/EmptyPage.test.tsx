import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EmptyPage from './index';

describe('EmptyPage', () => {
  it('renders without crashing', () => {
    render(<EmptyPage />);
  });

  it('renders an correct text', () => {
    render(<EmptyPage />);

    expect(screen.getByText('No items to display')).toBeTruthy();
  });

  it('renders proper default className', () => {
    render(<EmptyPage />);
    const emptyPage = screen.getByTestId('EmptyPage');

    expect(emptyPage.className).toBe('EmptyPage');
  });
});
