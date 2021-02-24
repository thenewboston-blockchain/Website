import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Shadow from '.';

describe('Shadow component', () => {
  it('renders without crashing', () => {
    render(<Shadow />);
  });
});
