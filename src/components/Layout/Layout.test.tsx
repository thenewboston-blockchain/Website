import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import store from 'store';

import Layout, {LayoutProps} from '.';

const Wrapper: FC = ({children}) => <Provider store={store}>{children}</Provider>;

const baseProps: LayoutProps = {
  children: (
    <>
      <h1>Hello World!</h1>
      <div id="tnb" data-testid="hash-test">
        Hello TNB!
      </div>
    </>
  ),
};

describe('Layout component', () => {
  const scrollToFn = jest.fn();
  const scrollIntoViewFn = jest.fn();

  beforeAll(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'popover-root');

    document.body.appendChild(portal);

    window.scrollTo = scrollToFn;
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewFn;
  });

  afterAll(cleanup);

  it('renders without crashing', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Layout {...baseProps} />
      </Router>,
      {wrapper: Wrapper},
    );

    expect(screen.getByTestId('Layout')).toBeTruthy();
  });

  it('renders children passed in', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Layout {...baseProps} />
      </Router>,
      {wrapper: Wrapper},
    );

    expect(screen.getByText('Hello World!')).toBeTruthy();
    expect(screen.getByText('Hello TNB!')).toBeTruthy();
  });

  it('scrolls to top', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Layout {...baseProps} />
      </Router>,
      {wrapper: Wrapper},
    );

    expect(scrollToFn).toBeCalledWith(0, 0);
  });

  it('scrolls to hash link from pathname', () => {
    const history = createMemoryHistory();
    history.push('/home#tnb');
    render(
      <Router history={history}>
        <Layout {...baseProps} />
      </Router>,
      {wrapper: Wrapper},
    );
    const element = screen.getByTestId('hash-test');

    expect(element).toBeTruthy();
    expect(element.scrollIntoView).toHaveBeenCalled();
  });
});
