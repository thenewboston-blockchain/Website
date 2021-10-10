import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthContainer, {AuthContainerProps} from '.';

describe('AuthContainer', () => {
  const baseProps: AuthContainerProps = {
    children: <div>Children</div>,
    heading: 'Auth Container Heading',
  };

  it('renders without error passed in', () => {
    render(<AuthContainer {...baseProps} />);

    expect(screen.getByTestId('AuthContainer')).toBeTruthy();
    expect(screen.getAllByText('Auth Container Heading')).toBeTruthy();
    expect(screen.getAllByText('Children')).toBeTruthy();
    expect(screen.queryByTestId('AuthContainer__error-message')).toBeNull();
  });

  it('renders with error passed in', () => {
    render(<AuthContainer {...baseProps} errorMessage="Error" />);

    expect(screen.getByTestId('AuthContainer')).toBeTruthy();
    expect(screen.getAllByText('Auth Container Heading')).toBeTruthy();
    expect(screen.getAllByText('Children')).toBeTruthy();
    expect(screen.getAllByText('Error')).toBeTruthy();
  });
});
