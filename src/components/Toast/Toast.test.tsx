import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Toast from './index';

describe('Toast component', () => {
  test('renders with children', () => {
    render(<Toast type="warning">Hello World</Toast>);

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  test('renders with default classname', () => {
    render(<Toast type="success">Test</Toast>);
    const el = screen.getByTestId('Toast');

    expect(el.className).toContain('Toast');
  });

  test('renders with success classname', () => {
    render(<Toast type="success">Test</Toast>);
    const el = screen.getByTestId('Toast');

    expect(el.className).toContain('Toast--success');
  });

  test('renders with warning classname', () => {
    render(<Toast type="warning">Test</Toast>);
    const el = screen.getByTestId('Toast');

    expect(el.className).toContain('Toast--warning');
  });

  test('renders with passed classname', () => {
    render(
      <Toast type="success" className="test">
        Test
      </Toast>,
    );
    const el = screen.getByTestId('Toast');

    expect(el.className).toContain('test');
  });

  test('renders with passed--success classname', () => {
    render(
      <Toast type="success" className="test">
        Test
      </Toast>,
    );
    const el = screen.getByTestId('Toast');

    expect(el.className).toContain('test--success');
  });

  test('renders with passed--warning classname', () => {
    render(
      <Toast type="warning" className="test">
        Test
      </Toast>,
    );
    const el = screen.getByTestId('Toast');

    expect(el.className).toContain('test--warning');
  });
});
