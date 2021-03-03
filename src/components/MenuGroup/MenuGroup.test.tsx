import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuGroup from './index';

describe('MenuGroup component', () => {
  test('renders without crashing', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test" />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup')).toBeTruthy();
  });

  test('renders with title', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test" />
      </Router>,
    );
    expect(screen.getByText('Test')).toBeTruthy();
  });

  test('renders with child components', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test">
          <div>Child 1</div>
          <div>Child 2</div>
        </MenuGroup>
      </Router>,
    );

    expect(screen.getByText('Child 1')).toBeTruthy();
    expect(screen.getByText('Child 2')).toBeTruthy();
  });

  test('renders MenuGroup__toggle', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test" />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__toggle')).toBeTruthy();
    expect(screen.getByTestId('MenuGroup__toggle')).toHaveClass('MenuGroup__toggle');
  });

  test('renders MenuGroup__toggle--expanded when clicked', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test" />
      </Router>,
    );

    const toggle = screen.getByTestId('MenuGroup__toggle');
    fireEvent.click(toggle);
    expect(toggle).toHaveClass('MenuGroup__toggle--expanded');
  });

  test('renders MenuGroup__submenu', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test" />
      </Router>,
    );

    expect(screen.getByTestId('MenuGroup__submenu')).toBeTruthy();
  });

  test('renders MenuGroup__submenu--expanded when toggle is clicked', async () => {
    render(
      <Router>
        <MenuGroup title="Test" urlBase="Test" />
      </Router>,
    );

    const toggle = screen.getByTestId('MenuGroup__toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('MenuGroup__submenu')).toHaveClass('MenuGroup__submenu--expanded');
  });
});
