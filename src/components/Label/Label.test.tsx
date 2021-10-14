import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

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

  it('renders proper default className', () => {
    render(<Label className="Custom__label-class" {...baseProps} />);
    const el = screen.getByTestId('Label');

    expect(el.className).toContain('Custom__label-class');
  });

  it('renders with classNames passed in', () => {
    render(<Label className="test" {...baseProps} />);
    const el = screen.getByTestId('Label');

    expect(el.className).toContain('test');
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
