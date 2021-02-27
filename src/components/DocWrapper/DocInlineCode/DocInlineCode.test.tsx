import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DocInlineCode from './index';

describe('DocInlineCode', () => {
  it('renders with default className', () => {
    render(<DocInlineCode />);
    const docInlineCode = screen.getByTestId('DocInlineCode');
    expect(docInlineCode).toBeTruthy();
    expect(docInlineCode).toHaveClass('DocInlineCode');
  });

  it('renders with className Test', () => {
    render(<DocInlineCode className="Test" />);
    const docInlineCode = screen.getByTestId('DocInlineCode');
    expect(docInlineCode).toBeTruthy();
    expect(docInlineCode).toHaveClass('Test');
  });

  it('renders with inner child component', () => {
    render(
      <DocInlineCode>
        <div data-testid="innerTest">
          <span>Test</span>
        </div>
      </DocInlineCode>,
    );
    const docInlineCode = screen.getByTestId('innerTest');
    expect(docInlineCode).toBeTruthy();

    const text = screen.getByText('Test');
    expect(text).toBeTruthy();
  });
});
