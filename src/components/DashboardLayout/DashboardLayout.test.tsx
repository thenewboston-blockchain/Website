import React, {FC} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DashboardLayout, {DashboardLayoutProps} from '.';

const baseProps: DashboardLayoutProps = {
  children: <p>Children</p>,
  menuItems: <p>Test</p>,
  pageName: 'TestPage',
  sectionName: 'TestSection',
};

const Wrapper: FC = ({children}) => {
  return (
    <Router>
      <HelmetProvider>{children}</HelmetProvider>
    </Router>
  );
};

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    render(<DashboardLayout {...baseProps} />, {wrapper: Wrapper});
  });

  test('expect to have proper page title passed in', async () => {
    render(<DashboardLayout {...baseProps} />, {wrapper: Wrapper});

    await waitFor(() => expect(document.title).toEqual(`${baseProps.sectionName} | thenewboston`));
  });

  test('expect to have breadcrumb menu hidden', () => {
    render(<DashboardLayout {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('BreadcrumbMenu')).toHaveStyle('display: none;');
  });

  test('expect to have proper pageName passed in', () => {
    render(<DashboardLayout {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('BreadcrumbMenu__navigation')).toHaveTextContent(baseProps.pageName);
  });

  test('expect to have proper menuItems passed in', () => {
    render(<DashboardLayout {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('DashboardLayout__left-menu_test').firstChild).toHaveTextContent('Test');
  });

  test('expect to have proper children passed in', () => {
    render(<DashboardLayout {...baseProps} />, {wrapper: Wrapper});

    expect(screen.getByTestId('DashboardLayout__main-content_test').firstChild).toHaveTextContent('Children');
  });
});
