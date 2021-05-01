import * as React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GoToTop from '.';

describe('GoToTop', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<GoToTop />);
  });
});
