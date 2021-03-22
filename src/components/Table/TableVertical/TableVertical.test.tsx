import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TableVertical, {TableVerticalProps} from '.';

const baseProps: TableVerticalProps = {
  className: 'Test',
  rows: [
    ['Row 1 Column 1', 'Row 1 Column 2'],
    ['Row 2 Column 1', 'Row 2 Column 2'],
  ],
};

describe('TableVertical Component', () => {
  it('renders without crashing', () => {
    render(<TableVertical {...baseProps} />);

    expect(screen.getByTestId('TableVertical')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<TableVertical {...baseProps} />);

    expect(screen.getByTestId('TableVertical')).toHaveClass('TableVertical');
    expect(screen.getByTestId('TableVertical__tbody')).toHaveClass('TableVertical__tbody');
  });

  it('renders with className passed in', () => {
    render(<TableVertical {...baseProps} />);

    expect(screen.getByTestId('TableVertical')).toHaveClass('Test');
    expect(screen.getByTestId('TableVertical__tbody')).toHaveClass('Test__tbody');
  });

  it('renders with altColors passed in', () => {
    render(<TableVertical {...baseProps} altColors />);

    const trElements = screen.getAllByTestId('TableVertical__tr');

    const evenRows = trElements.filter((i, index) => index % 2 === 0);
    evenRows.forEach((item) => {
      expect(item).toHaveClass('TableVertical__tr--even');
    });
  });

  it('renders with innerBorders passed in', () => {
    render(<TableVertical {...baseProps} innerBorders />);

    const tdElements = screen.getAllByTestId('TableVertical__td');
    tdElements.forEach((item) => {
      expect(item).toHaveClass('TableVertical__td--border');
    });
  });

  it('renders with rows passed in', () => {
    render(<TableVertical {...baseProps} />);

    expect(screen.queryByText('Row 1 Column 1')).toBeTruthy();
    expect(screen.queryByText('Row 1 Column 2')).toBeTruthy();
    expect(screen.queryByText('Row 2 Column 1')).toBeTruthy();
    expect(screen.queryByText('Row 2 Column 2')).toBeTruthy();
  });
});
