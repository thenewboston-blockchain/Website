import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TableBorderGrid, {TableBorderGridProps} from '.';

const baseProps: TableBorderGridProps = {
  className: 'Test',
  headers: ['Head 1', 'Head 2'],
  rows: [
    ['Row 1 Data 1', 'Row 1 Data 2'],
    ['Row 2 Data 1', 'Row 2 Data 2'],
  ],
  title: 'Test Title',
};

describe('TableBorderGrid component', () => {
  it('renders without crashing', () => {
    render(<TableBorderGrid {...baseProps} />);
  });

  it('renders with default className', () => {
    render(<TableBorderGrid {...baseProps} />);

    expect(screen.getByTestId('TableBorderGrid')).toHaveClass('TableBorderGrid');
    expect(screen.getByTestId('TableBorderGrid__title')).toHaveClass('TableBorderGrid__title');
    expect(screen.getByTestId('TableBorderGrid__table')).toHaveClass('TableBorderGrid__table');
  });

  it('renders with className passed in', () => {
    render(<TableBorderGrid {...baseProps} />);

    expect(screen.getByTestId('TableBorderGrid')).toHaveClass('Test');
    expect(screen.getByTestId('TableBorderGrid__title')).toHaveClass('Test__title');
    expect(screen.getByTestId('TableBorderGrid__table')).toHaveClass('Test__table');
  });

  it('renders title passed in', () => {
    render(<TableBorderGrid {...baseProps} />);

    expect(screen.getByTestId('TableBorderGrid__title').textContent).toBe('Test Title');
  });

  it('renders headers passed in', () => {
    render(<TableBorderGrid {...baseProps} />);

    expect(screen.queryByText('Head 1')).toBeTruthy();
    expect(screen.queryByText('Head 2')).toBeTruthy();
  });

  it('renders rows passed in', () => {
    render(<TableBorderGrid {...baseProps} />);

    expect(screen.queryByText('Row 1 Data 1')).toBeTruthy();
    expect(screen.queryByText('Row 1 Data 2')).toBeTruthy();
    expect(screen.queryByText('Row 2 Data 1')).toBeTruthy();
    expect(screen.queryByText('Row 2 Data 2')).toBeTruthy();
  });
});
