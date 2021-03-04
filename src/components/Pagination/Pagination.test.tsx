import React, {FC} from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import Pagination, {PaginationProps} from '.';

const history = createMemoryHistory();
const Wrapper: FC = ({children}) => <Router history={history}>{children}</Router>;

const baseProps: PaginationProps = {
  navigationData: [
    {
      name: 'First',
      url: '/first',
    },
    {
      name: 'Second',
      url: '/second',
    },
    {
      name: 'Third',
      url: '/third',
    },
  ],
};

describe('Pagination component', () => {
  it('renders without crashing', () => {
    render(<Pagination {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('Pagination')).toBeTruthy();
  });

  it('renders first route correctly', () => {
    history.push('/first');
    render(<Pagination {...baseProps} />, {wrapper: Wrapper});

    const firstEl = screen.queryByText('First');
    const secondEl = screen.queryByText('Second');
    const thirdEl = screen.queryByText('Third');

    expect(firstEl).not.toBeTruthy();
    expect(secondEl).toBeTruthy();
    expect(thirdEl).not.toBeTruthy();

    expect(secondEl).toHaveAttribute('href', '/second');
  });

  it('renders last route correctly', () => {
    history.push('/third');
    render(<Pagination {...baseProps} />, {wrapper: Wrapper});

    const firstEl = screen.queryByText('First');
    const secondEl = screen.queryByText('Second');
    const thirdEl = screen.queryByText('Third');

    expect(firstEl).not.toBeTruthy();
    expect(secondEl).toBeTruthy();
    expect(thirdEl).not.toBeTruthy();

    expect(secondEl).toHaveAttribute('href', '/second');
  });

  it('renders any middle route correctly', () => {
    history.push('/second');
    render(<Pagination {...baseProps} />, {wrapper: Wrapper});

    const firstEl = screen.queryByText('First');
    const secondEl = screen.queryByText('Second');
    const thirdEl = screen.queryByText('Third');

    expect(firstEl).toBeTruthy();
    expect(secondEl).not.toBeTruthy();
    expect(thirdEl).toBeTruthy();

    expect(firstEl).toHaveAttribute('href', '/first');
    expect(thirdEl).toHaveAttribute('href', '/third');
  });
});
