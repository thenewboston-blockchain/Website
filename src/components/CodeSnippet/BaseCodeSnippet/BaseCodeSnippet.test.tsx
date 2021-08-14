import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BaseCodeSnippet, {BaseCodeSnippetProps, SnippetLang} from '.';

const baseProps: BaseCodeSnippetProps = {
  code: `// Testing
  // TNB is AMAZING
  console.log('TNB is ah-ma-zing');`,
  language: SnippetLang.json,
};

const baseTestId = 'BaseCodeSnippet';

describe('RequestResponseSnippet', () => {
  it('renders without crashing', () => {
    render(<BaseCodeSnippet {...baseProps} />);

    expect(screen.getByTestId(baseTestId)).toBeTruthy();
  });

  it('renders with code passed in', () => {
    render(<BaseCodeSnippet {...baseProps} />);
    expect(screen.getByText('// Testing')).toBeTruthy();
    expect(screen.getByText('// TNB is AMAZING')).toBeTruthy();
    expect(screen.getByText("console.log('TNB is ah-ma-zing');")).toBeTruthy();
  });

  it('renders with the default duotone dark style', () => {
    render(<BaseCodeSnippet {...baseProps} />);

    // distinct style for duotone dark in prism
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('background-color', 'rgb(42, 39, 52)');
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('color', 'rgb(154, 134, 253)');
  });

  it('renders without crashing when light passed in', () => {
    render(<BaseCodeSnippet {...baseProps} light />);

    // distinct style for solarized light in prism
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('background-color', 'rgb(253, 246, 227)');
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('color', 'rgb(101, 123, 131)');
  });

  it('renders with showLineNumbers passed in', () => {
    render(<BaseCodeSnippet {...baseProps} showLineNumbers />);
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });
});
