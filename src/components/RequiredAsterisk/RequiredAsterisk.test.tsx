import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import RequiredAsterisk from './index';

describe('RequiredAsterisk', () => {
  it('renders without crashing', () => {
    render(<RequiredAsterisk />);
  });

  it('renders an Asterix', () => {
    render(<RequiredAsterisk />);

    expect(screen.getByText('*')).toBeTruthy();
  });

  it('renders proper default className', () => {
    render(<RequiredAsterisk />);
    const asterisk = screen.getByTestId('RequiredAsterisk');

    expect(asterisk.className).toBe('RequiredAsterisk');
  });
});
