import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import Label, {LabelProps} from '.';

const darkColor = '222';
const blackColor = '000';
const lightColor = 'ddd';
const whiteColor = 'fff';
const hexDark = `#${darkColor}`;
const hexBlack = `#${blackColor}`;
const hexLight = `#${lightColor}`;
const hexWhite = `#${whiteColor}`;
const testName = 'Hello world';

describe('Label', () => {
  const baseProps: LabelProps = {
    color: whiteColor,
    name: testName,
  };

  it('renders with name passed in', () => {
    render(<Label {...baseProps} />);

    expect(screen.getByTestId('Label')).toBeTruthy();
    expect(screen.getByTestId('Label').textContent).toEqual(testName);
  });

  it('renders with custom className', () => {
    const customClassName = 'Custom__Label';
    render(<Label className={customClassName} {...baseProps} />);
    const el = screen.getByTestId('Label');

    expect(el.className).toContain(customClassName);
  });

  it('renders with black text color with light background color passed in', () => {
    render(<Label className="test" {...baseProps} color={lightColor} />);
    const el = screen.getByTestId('Label');

    expect(el).toHaveStyleRule('background-color', hexLight);
    expect(el).toHaveStyleRule('color', hexBlack);
  });

  it('renders with white text color with dark background color passed in', () => {
    render(<Label className="test" {...baseProps} color={darkColor} />);
    const el = screen.getByTestId('Label');

    expect(el).toHaveStyleRule('background-color', hexDark);
    expect(el).toHaveStyleRule('color', hexWhite);
  });
});
