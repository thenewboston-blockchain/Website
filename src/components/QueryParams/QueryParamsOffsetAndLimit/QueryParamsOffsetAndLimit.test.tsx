import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import QueryParamsOffsetAndLimit from '.';

describe('QueryParamsOffsetAndLimit', () => {
  test('renders without crashing and with correct returned entity name', () => {
    render(<QueryParamsOffsetAndLimit returnedEntityName="Test nodes" />);

    expect(screen.getByText('If you want to start at a specific point, an offset can be specified.')).toBeTruthy();
    expect(screen.getByText('offset')).toBeTruthy();
    expect(
      screen.getByText('Maximum number of Test nodes returned by the node after the offset. (max: 100).'),
    ).toBeTruthy();
    expect(screen.getByText('limit')).toBeTruthy();
    expect(screen.getAllByText('URL parameter').length).toBe(2);
  });
});
