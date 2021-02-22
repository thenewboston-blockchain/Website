import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TotalAmount from './index';

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
    const el = screen.getByTestId('TotalAmount');

    expect(el.className).toContain('test');
  });

  test('renders with updated locale, using de-DE', () => {
    render(<TotalAmount amount={1000} title="total" locale="de-DE" />);
    expect(screen.getByText('1.000')).toBeTruthy();
  });

  test('renders with updated locale, using th-TH-u-nu-thai', () => {
    const locale = 'th-TH-u-nu-thai';
    render(<TotalAmount amount={1000} title="total" locale={locale} />);
    expect(screen.getByText('๑,๐๐๐')).toBeTruthy();
  });
});
