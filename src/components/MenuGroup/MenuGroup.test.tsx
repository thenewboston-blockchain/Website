import React from 'react';
import {Router} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createMemoryHistory} from 'history';

import MenuGroup from '.';

const baseProps = {
  children: (
    <>
      <div>Child 1</div>
      <div>Child 2</div>
    </>
  ),
  title: 'Test',
  urlBase: 'test',
};

describe('MenuGroup component', () => {
  it('renders without crashing', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup')).toBeTruthy();
  });

  it('renders with role when passed in', () => {
    const history = createMemoryHistory();
    const props = {...baseProps, role: 'group'};
    render(
      <Router history={history}>
        <MenuGroup {...props} />
      </Router>,
    );

    expect(screen.getByRole('group')).toBeTruthy();
  });

  it('renders with title', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('renders all the children', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    expect(screen.getByText('Child 1')).toBeTruthy();
    expect(screen.getByText('Child 2')).toBeTruthy();
  });

  it('renders submenu as expanded when urlBase matches pathname', () => {
    const history = createMemoryHistory();
    history.replace('/test');
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__submenu')).toHaveStyle('display: flex;');
  });

  it('renders MenuGroup__toggle', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__toggle')).toBeTruthy();
  });

  it('renders MenuGroup__toggle as expanded when clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    const toggle = screen.getByTestId('MenuGroup__toggle');
    fireEvent.click(toggle);
    expect(toggle).toHaveStyle('padding-bottom: 10px;');
  });

  it('renders MenuGroup__submenu', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__submenu')).toBeTruthy();
  });

  it('renders MenuGroup__submenu as expanded when toggle is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MenuGroup {...baseProps} />
      </Router>,
    );

    const toggle = screen.getByTestId('MenuGroup__toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('MenuGroup__submenu')).toHaveStyle('display: flex;');
  });
});
