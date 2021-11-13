import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import {BreadcrumbMenu} from 'components';

const MenuItems = (
  <>
    <span>FirstItem</span>
    <span>SecondItem</span>
  </>
);

interface Props {
  className?: string;
}

const WrappedComponent = ({className}: Props) => {
  return (
    <Router>
      <BreadcrumbMenu className={className} menuItems={MenuItems} pageName="PageTest" sectionName="SectionTest" />
    </Router>
  );
};

describe('BreadcrumbMenu component', () => {
  test('renders with testId BreadcrumbMenu', () => {
    render(<WrappedComponent />);

    expect(screen.getByTestId('BreadcrumbMenu')).toBeTruthy();
  });

  test('renders with custom className Test', () => {
    render(<WrappedComponent className="Test" />);

    expect(screen.getByTestId('BreadcrumbMenu')).toHaveClass('Test');
  });

  test('renders sectionName', async () => {
    render(<WrappedComponent />);

    const menu = screen.getByTestId('BreadcrumbMenu__navigation');
    expect(menu.innerHTML).toContain('SectionTest');
  });

  test('renders pageName', async () => {
    render(<WrappedComponent />);

    const menu = screen.getByTestId('BreadcrumbMenu__navigation');
    expect(menu.innerHTML).toContain('PageTest');
  });

  test('renders renderBreadcrumbBar', () => {
    render(<WrappedComponent />);
    expect(screen.queryByTestId('BreadcrumbMenu__bar')).toBeTruthy();
  });

  test('does not render menuItems if closed', () => {
    render(<WrappedComponent />);

    expect(screen.queryByText('FirstItem')).toBeNull();
    expect(screen.queryByText('SecondItem')).toBeNull();
  });

  test('renders menuitems when open', async () => {
    render(<WrappedComponent />);
    const menu = screen.getByTestId('BreadcrumbMenu__bar');
    await fireEvent.click(menu);

    expect(screen.queryByText('FirstItem')).toBeTruthy();
    expect(screen.queryByText('SecondItem')).toBeTruthy();
  });

  test('renders dropdown menu when open', async () => {
    render(<WrappedComponent />);
    const menu = screen.getByTestId('BreadcrumbMenu__bar');
    await fireEvent.click(menu);

    expect(screen.queryByTestId('BreadcrumbMenu__dropdown-menu')).toBeTruthy();
  });

  test('does not render dropdown menu when closed', async () => {
    render(<WrappedComponent />);
    expect(screen.queryByTestId('BreadcrumbMenu__dropdown-menu')).toBeFalsy();
  });

  test('renders toggle when closed', () => {
    render(<WrappedComponent />);
    expect(screen.queryByTestId('BreadcrumbMenu__toggle-container')).toBeTruthy();
  });
});
