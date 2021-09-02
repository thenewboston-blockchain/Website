import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {SnippetLang} from '../BaseCodeSnippet';
import CodeSnippet from '.';

const BashSampleCode = `
#!/bin/bash
echo "Hello from TNBC!"
`;

const JSONSampleCode = `
#!/bin/bash
echo "Hello from TNBC!"
`;

describe('CodeSnippet component', () => {
  test('renders with CodeSample', () => {
    render(<CodeSnippet code={BashSampleCode} />);
    expect(screen.getByText('#!/bin/bash')).toBeTruthy();
    expect(screen.queryByText('"Hello from TNBC!"')).toBeTruthy();
  });

  test('renders code language-bash', () => {
    render(<CodeSnippet code={BashSampleCode} />);
    const code = screen.getByTestId('BaseCodeSnippet').querySelector('code');
    expect(code).toBeTruthy();
    expect(code).toHaveClass('language-bash');
  });

  test('renders light code for language-bash', () => {
    render(<CodeSnippet code={BashSampleCode} />);
    const code = screen.getByTestId('BaseCodeSnippet').querySelector('code');
    expect(code).toBeTruthy();
    expect(code).toHaveClass('language-bash');

    expect(screen.getByTestId('BaseCodeSnippet').style).toHaveProperty('background-color', 'rgb(253, 246, 227)');
    expect(screen.getByTestId('BaseCodeSnippet').style).toHaveProperty('color', 'rgb(101, 123, 131)');
  });

  test('renders dark code for language-json', () => {
    render(<CodeSnippet code={JSONSampleCode} language={SnippetLang.json} />);
    const code = screen.getByTestId('BaseCodeSnippet').querySelector('code');
    expect(code).toBeTruthy();
    expect(code).toHaveClass('language-json');

    expect(screen.getByTestId('BaseCodeSnippet').style).toHaveProperty('background-color', 'rgb(42, 39, 52)');
    expect(screen.getByTestId('BaseCodeSnippet').style).toHaveProperty('color', 'rgb(154, 134, 253)');
  });

  test('renders component with custom className CustomCodeSnippet', () => {
    render(<CodeSnippet code={BashSampleCode} className="CustomCodeSnippet" />);
    const codeSnippet = screen.getByTestId('CodeSnippet');
    expect(codeSnippet).toBeTruthy();
    expect(codeSnippet).toHaveClass('CustomCodeSnippet');
  });

  test('does not render heading', () => {
    render(<CodeSnippet code={BashSampleCode} className="CustomCodeSnippet" />);
    const codeSnippetHeading = screen.queryByTestId('CodeSnippet__heading');
    expect(codeSnippetHeading).toBeFalsy();
  });

  test('renders component with heading', () => {
    render(<CodeSnippet heading="Heading" code={BashSampleCode} className="CustomCodeSnippet" />);
    expect(screen.queryByTestId('CodeSnippet__heading')).toBeTruthy();
    expect(screen.queryByTestId('CodeSnippet__heading')).toHaveTextContent('Heading');
  });

  test('renders component with heading and custom className CustomCodeSnippet', () => {
    render(<CodeSnippet heading="Heading" code={BashSampleCode} className="CustomCodeSnippet" />);
    expect(screen.queryByTestId('CodeSnippet__heading')).toBeTruthy();
    expect(screen.queryByTestId('CodeSnippet__heading')).toHaveTextContent('Heading');
  });
});
