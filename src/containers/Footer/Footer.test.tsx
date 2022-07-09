import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Footer from '.';

interface Props {
  className?: string;
}

const WrappedComponent = ({className}: Props) => {
  return (
    <Router>
      <Footer className={className} />
    </Router>
  );
};

describe('Footer component', () => {
  test('renders Footer component', () => {
    render(<WrappedComponent />);
    const el = screen.getByTestId('Footer');
    expect(el).toBeTruthy();
  });

  test('renders Footer component with custom className CustomFooter', () => {
    render(<WrappedComponent className="CustomFooter" />);
    const el = screen.getByTestId('Footer');
    expect(el.className).toContain('CustomFooter');
  });

  test('renders FooterNavLists', () => {
    render(<WrappedComponent />);

    expect(screen.getByText('Developer')).toBeTruthy();
    expect(screen.getByText('Resources')).toBeTruthy();
    expect(screen.getByText('Social')).toBeTruthy();
    expect(screen.getByText('Legal')).toBeTruthy();
  });
});
