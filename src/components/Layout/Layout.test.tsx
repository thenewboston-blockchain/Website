import React, {ComponentType, ReactNode} from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import store from 'store';

import Layout, {LayoutProps} from '.';

const Wrapper = ({children}: {children: ReactNode}): ReactNode => (
  <Provider store={store}>
    <MemoryRouter>{children}</MemoryRouter>
  </Provider>
);

const baseProps: LayoutProps = {
  children: <h1>Test Child</h1>,
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
  }),
}));

describe('Layout component', () => {
  beforeEach(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'popover-root');

    document.body.appendChild(portal);
  });

  it('renders without crashing', () => {
    render(<Layout {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Layout')).toBeTruthy();
  });
});
