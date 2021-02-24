import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import A from '.';

describe('A component', () => {
  test('renders with text passed in', () => {
    render(
      <A className="test" href="/">
        Hello World
      </A>,
    );

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  test('expect to have proper href passed in', () => {
    const link = 'https://thenewboston.com';
    render(<A href={link}>hello</A>);
    const el = screen.getByTestId('A');

    expect(el).toHaveAttribute('href', link);
  });

  test('renders proper default className', () => {
    render(<A href="/">hello</A>);
    const el = screen.getByTestId('A');

    expect(el.className).toBe('A');
  });

  test('renders with classNames passed in', () => {
    render(
      <A className="test" href="/">
        hello
      </A>,
    );
    const el = screen.getByTestId('A');

    expect(el.className).toContain('test');
  });

  test('has rel == noreferrer when newWindow is true', () => {
    render(
      <A href="/" newWindow>
        hello
      </A>,
    );
    const el = screen.getByTestId('A');

    expect(el).toHaveAttribute('rel', 'noreferrer');
  });

  test('has rel != noreferrer when newWindow is false', () => {
    render(
      <A href="/" newWindow={false}>
        hello
      </A>,
    );
    const el = screen.getByTestId('A');

    expect(el).not.toHaveAttribute('rel', 'noreferrer');
  });

  test('has target == _blank when newWindow is true', () => {
    render(
      <A href="/" newWindow>
        hello
      </A>,
    );
    const el = screen.getByTestId('A');

    expect(el).toHaveAttribute('target', '_blank');
  });

  test('has target == _self when newWindow is false', () => {
    render(
      <A href="/" newWindow={false}>
        hello
      </A>,
    );
    const el = screen.getByTestId('A');

    expect(el).toHaveAttribute('target', '_self');
  });

  test('shows new window icon by default when text is passed in as content', () => {
    render(<A href="/">hello</A>);
    const icon = screen.getByTestId('A__Icon--new-window');

    expect(icon).toBeTruthy();
  });

  test('does not show new window icon by default when non-text is passed in as content', () => {
    render(
      <A href="/">
        <div>hi</div>
      </A>,
    );
    const icon = screen.queryAllByTestId('A__Icon--new-window');

    expect(icon.length).toBe(0);
  });

  test('does not show new window icon by default when newWindow is false', () => {
    render(
      <A href="/" newWindow={false}>
        hi
      </A>,
    );
    const icon = screen.queryAllByTestId('A__Icon--new-window');

    expect(icon.length).toBe(0);
  });

  test('new window icon has default className', () => {
    render(<A href="/">hello</A>);
    const icon = screen.getByTestId('A__Icon--new-window');

    expect(icon.className).toContain('A__Icon--new-window');
  });

  test('new window icon has correct className when className passed in', () => {
    render(
      <A className="test" href="/">
        hello
      </A>,
    );
    const icon = screen.getByTestId('A__Icon--new-window');

    expect(icon.className).toContain('test__Icon--new-window');
  });
});
