import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Label, {LabelProps} from '.';

const rgbWhite = 'rgb(255, 255, 255)';
const rgbBlack = 'rgb(0, 0, 0)';
const rgbDark = 'rgb(34, 34, 34)';
const rgbLight = 'rgb(221, 221, 221)';
const hexDark = '222';
const hexLight = 'ddd';
const testName = 'Hello world';

describe('Label', () => {
  const baseProps: LabelProps = {
    color: rgbWhite,
    name: testName,
  };

  it('renders with name passed in', () => {
    render(<Label {...baseProps} />);

    expect(screen.getByTestId('Label')).toBeTruthy();
    expect(screen.getByTestId('Label').textContent).toEqual(testName);
  });

  it('renders proper default className', () => {
    render(<Label {...baseProps} />);
    const el = screen.getByTestId('Label');

    expect(el.className).toBe('Label');
  });

  it('renders with classNames passed in', () => {
    render(<Label className="test" {...baseProps} />);
    const el = screen.getByTestId('Label');

    expect(el.className).toContain('test');
  });

  it('renders with black text color with light background color passed in', () => {
    render(<Label className="test" {...baseProps} color={hexLight} />);
    const el = screen.getByTestId('Label');

    expect(el.style).toHaveProperty('background-color', rgbLight);
    expect(el.style).toHaveProperty('color', rgbBlack);
  });

  it('renders with white text color with dark background color passed in', () => {
    render(<Label className="test" {...baseProps} color={hexDark} />);
    const el = screen.getByTestId('Label');

    expect(el.style).toHaveProperty('background-color', rgbDark);
    expect(el.style).toHaveProperty('color', rgbWhite);
  });
});
