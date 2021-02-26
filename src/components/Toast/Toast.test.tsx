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
    const icon = screen.getByTestId('Toast__icon');
    const text = screen.getByTestId('Toast__text');

    expect(el.className).toContain('Toast');
    expect(icon.className).toContain('Toast__icon');
    expect(text.className).toContain('Toast__text');
  });

  test('renders with success classname', () => {
    render(<Toast type="success">Test</Toast>);
    const el = screen.getByTestId('Toast');
    const icon = screen.getByTestId('Toast__icon');

    expect(el.className).toContain('Toast--success');
    expect(icon.className).toContain('Toast__icon--success');
  });

  test('renders with warning classname', () => {
    render(<Toast type="warning">Test</Toast>);
    const el = screen.getByTestId('Toast');
    const icon = screen.getByTestId('Toast__icon');

    expect(el.className).toContain('Toast--warning');
    expect(icon.className).toContain('Toast__icon--warning');
  });

  test('renders with passed classname', () => {
    render(
      <Toast type="success" className="test">
        Test
      </Toast>,
    );
    const el = screen.getByTestId('Toast');
    const icon = screen.getByTestId('Toast__icon');
    const text = screen.getByTestId('Toast__text');

    expect(el.className).toContain('test');
    expect(icon.className).toContain('test__icon');
    expect(text.className).toContain('test__text');
  });

  test('renders with passed--success classname', () => {
    render(
      <Toast type="success" className="test">
        Test
      </Toast>,
    );
    const el = screen.getByTestId('Toast');
    const icon = screen.getByTestId('Toast__icon');

    expect(el.className).toContain('Toast--success');
    expect(icon.className).toContain('Toast__icon--success');
  });

  test('renders with passed--warning classname', () => {
    render(
      <Toast type="warning" className="test">
        Test
      </Toast>,
    );
    const el = screen.getByTestId('Toast');
    const icon = screen.getByTestId('Toast__icon');

    expect(el.className).toContain('Toast--warning');
    expect(icon.className).toContain('Toast__icon--warning');
  });
});
