import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loader from './index';

describe('Loader component', () => {
  test('renders with testId Loader', () => {
    render(<Loader />);
    const loader = screen.getByTestId('Loader');
    expect(loader).toBeTruthy();
  });

  test('renders with role Button', () => {
    render(<Loader />);
    const loader = screen.getByRole('img');
    expect(loader).toBeTruthy();
  });

  test('renders with className Test', () => {
    render(<Loader className="Test" />);
    const loader = screen.getByTestId('Loader');
    expect(loader).toBeTruthy();
    expect(loader).toHaveClass('Test');
  });

  test('renders with LoadingIcon', () => {
    render(<Loader />);
    const loader = screen.getByTestId('Loader');
    expect(loader).toBeTruthy();

    const icon = loader.querySelector('.mdi-icon');
    expect(icon).toBeTruthy();
    expect(icon?.getAttribute('width')).toEqual('15.35');
    expect(icon?.getAttribute('height')).toEqual('15.35');
  });
});
