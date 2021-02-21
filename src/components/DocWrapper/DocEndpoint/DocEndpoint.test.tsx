/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DocEndpoint, {DocEndpointProps} from './index';

describe('DocEndpoint', () => {
  let props: DocEndpointProps;

  beforeEach(() => {
    props = {
      endpoint: '/bank',
      method: 'GET',
    };
  });

  it('renders without crashing', () => {
    render(<DocEndpoint {...props} />);

    expect(screen.getByTestId('DocEndpoint')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<DocEndpoint {...props} />);
    const docEndpoint = screen.getByTestId('DocEndpoint');

    expect(docEndpoint).toHaveClass('DocEndpoint');
  });

  it('renders with passed in className', () => {
    render(<DocEndpoint {...props} className="test" />);
    const docEndpoint = screen.getByTestId('DocEndpoint');

    expect(docEndpoint).toHaveClass('DocEndpoint');
    expect(docEndpoint).toHaveClass('test');
  });

  it('renders with valid Props', () => {
    render(<DocEndpoint {...props} />);
    const {method, endpoint} = props;
    const docEndpoint = screen.getByText(`${method} ${endpoint}`);

    expect(docEndpoint).toBeTruthy();
  });
});
