import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DocSubHeader from '.';

describe('DocSubHeader component', () => {
  test('renders with text passed in', () => {
    render(<DocSubHeader className="test">Hello World!</DocSubHeader>);

    expect(screen.getByText('Hello World!')).toBeTruthy();
  });

  test('renders proper default className', () => {
    render(<DocSubHeader>Hello World!</DocSubHeader>);
    const el = screen.getByTestId('DocSubHeader');
    expect(el.className).toBe('DocSubHeader');
  });

  test('renders with classNames passed in', () => {
    render(<DocSubHeader className="test">Hello World!</DocSubHeader>);
    const docSubHeader = screen.getByTestId('DocSubHeader');

    expect(docSubHeader.className).toContain('test');
  });
});
