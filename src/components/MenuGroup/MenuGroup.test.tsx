import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuGroup from '.';

const BaseProps = {
  children: (
    <>
      <div>Child 1</div>
      <div>Child 2</div>
    </>
  ),
  title: 'Test',
  urlBase: 'Test',
};

describe('MenuGroup component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup')).toBeTruthy();
  });

  it('renders with customTestId "group" without crashing', () => {
    render(
      <Router>
        <MenuGroup role="group" {...BaseProps} />
      </Router>,
    );

    expect(screen.getByRole('group')).toBeTruthy();
  });

  it('renders with title', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('renders with child components', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );

    expect(screen.getByText('Child 1')).toBeTruthy();
    expect(screen.getByText('Child 2')).toBeTruthy();
  });

  it('renders MenuGroup__toggle', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__toggle')).toBeTruthy();
    expect(screen.getByTestId('MenuGroup__toggle')).toHaveClass('MenuGroup__toggle');
  });

  it('renders MenuGroup__toggle--expanded when clicked', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );

    const toggle = screen.getByTestId('MenuGroup__toggle');
    fireEvent.click(toggle);
    expect(toggle).toHaveClass('MenuGroup__toggle--expanded');
  });

  it('renders MenuGroup__submenu', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__submenu')).toBeTruthy();
  });

  it('renders MenuGroup__submenu--expanded when toggle is clicked', () => {
    render(
      <Router>
        <MenuGroup {...BaseProps} />
      </Router>,
    );

    const toggle = screen.getByTestId('MenuGroup__toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('MenuGroup__submenu')).toHaveClass('MenuGroup__submenu--expanded');
  });
});
