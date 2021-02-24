import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RequiredAsterisk from '.';

describe('RequiredAsterisk', () => {
  it('renders without crashing', () => {
    render(<RequiredAsterisk />);
  });

  it('renders an asterisk', () => {
    render(<RequiredAsterisk />);

    expect(screen.getByText('*')).toBeTruthy();
  });

  it('renders proper default className', () => {
    render(<RequiredAsterisk />);
    const asterisk = screen.getByTestId('RequiredAsterisk');

    expect(asterisk.className).toBe('RequiredAsterisk');
  });

  it('renders with passed in className', () => {
    render(<RequiredAsterisk className="test" />);
    const asterisk = screen.getByTestId('RequiredAsterisk');

    expect(asterisk).toHaveClass('test');
  });
});
