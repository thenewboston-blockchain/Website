import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TotalAmount from '.';

describe('TotalAmount component', () => {
  test('renders with title and amount', () => {
    render(<TotalAmount amount={100} title="total" />);

    expect(screen.getByText('total')).toBeTruthy();
    expect(screen.getByText('100')).toBeTruthy();
  });

  test('renders proper default className', () => {
    render(<TotalAmount amount={100} title="total" />);
    const el = screen.getByTestId('TotalAmount');
    expect(el.className).toBe('TotalAmount');
  });

  test('renders with classNames passed in', () => {
    render(<TotalAmount amount={100} title="total" className="test" />);
    const totalAmount = screen.getByTestId('TotalAmount');
    const title = screen.getByTestId('TotalAmount__title');
    const amount = screen.getByTestId('TotalAmount__amount');

    expect(totalAmount.className).toContain('test');
    expect(title.className).toContain('test__title');
    expect(amount.className).toContain('test__amount');
  });

  test('renders with correctly formatted amount', () => {
    render(<TotalAmount amount={1000} title="total" />);
    expect(screen.getByText('1,000')).toBeTruthy();
  });
});
