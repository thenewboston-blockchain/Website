import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Shadow from './index';

describe('Shadow component', () => {
  // eslint-disable-next-line jest/expect-expect
  it('renders without crashing', () => {
    render(<Shadow />);
  });
});
