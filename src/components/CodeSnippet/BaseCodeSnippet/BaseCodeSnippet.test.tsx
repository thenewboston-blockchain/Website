import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BaseCodeSnippet, {BaseCodeSnippetProps, SnippetLang} from '.';

const baseProps: BaseCodeSnippetProps = {
  code: `// Testing
  // TNB To the moon
  console.log('TNB is heading to the moon');`,
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
    expect(screen.getByText('// TNB To the moon')).toBeTruthy();
    expect(screen.getByText("console.log('TNB is heading to the moon');")).toBeTruthy();
  });

  it('renders with the default obsidian style', () => {
    render(<BaseCodeSnippet {...baseProps} />);

    // distinct style for obsidian in hljs
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('background-color', 'rgb(40, 43, 46)');
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('color', 'rgb(224, 226, 228)');
  });

  it('renders without crashing when light passed in', () => {
    render(<BaseCodeSnippet {...baseProps} light />);

    // distinct style for routeros in hljs
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('background-color', 'rgb(240, 240, 240)');
    expect(screen.getByTestId(baseTestId).style).toHaveProperty('color', 'rgb(68, 68, 68)');
  });

  it('renders with showLineNumbers passed in', () => {
    render(<BaseCodeSnippet {...baseProps} showLineNumbers />);
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });
});
