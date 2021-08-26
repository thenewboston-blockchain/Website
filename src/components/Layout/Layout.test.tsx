import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import store from 'store';

import Layout from '.';

const Wrapper: FC = ({children}) => <Provider store={store}>{children}</Provider>;

const testNode = (
  <>
    <h1>Hello World!</h1>
    <div id="tnb" data-testid="hash-test">
      Hello TNB!
    </div>
  </>
);

describe('Layout component', () => {
  beforeAll(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'popover-root');

    document.body.appendChild(portal);

    window.scrollTo = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it('renders without crashing', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Layout>{testNode}</Layout>
      </Router>,
      {wrapper: Wrapper},
    );

    expect(screen.getByTestId('Layout')).toBeTruthy();
  });

  it('renders children passed in', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Layout>{testNode}</Layout>
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
        <Layout>{testNode}</Layout>
      </Router>,
      {wrapper: Wrapper},
    );

    expect(window.scrollTo).toBeCalledWith(0, 0);
  });

  it('scrolls to hash link from pathname', () => {
    const history = createMemoryHistory();
    history.push('/home#tnb');
    render(
      <Router history={history}>
        <Layout>{testNode}</Layout>
      </Router>,
      {wrapper: Wrapper},
    );
    const element = screen.getByTestId('hash-test');

    expect(element).toBeTruthy();
    expect(element.scrollIntoView).toHaveBeenCalled();
  });
});
