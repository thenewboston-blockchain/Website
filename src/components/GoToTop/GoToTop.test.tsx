import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GoToTop from '.';

describe('GoToTop', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<GoToTop />);
  });

  it('displays icon when visible', () => {
    jest.spyOn(React, 'useState').mockImplementation(() => [true, jest.fn()]);

    render(<GoToTop />);
    const button = screen.queryByTestId('GoToTop');

    expect(button).toBeTruthy();
  });
});
