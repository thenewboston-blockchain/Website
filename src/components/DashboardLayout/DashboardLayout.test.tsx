import React, {ReactNode} from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import {HelmetProvider} from 'react-helmet-async';
import DashboardLayout from '.';

interface Props {
  children?: ReactNode;
  menuItems?: ReactNode;
  pageName?: string;
  sectionName?: string;
}

const TestComponent = ({
  children,
  menuItems = <p>MenuItem</p>,
  pageName = 'PageName',
  sectionName = 'SectionName',
}: Props) => {
  return (
    <Router>
      <HelmetProvider>
        <DashboardLayout menuItems={menuItems} pageName={pageName} sectionName={sectionName}>
          {children || <div>Some content here</div>}
        </DashboardLayout>
      </HelmetProvider>
    </Router>
  );
};

describe('Dashboard Component', () => {
  test('expect to have proper page title passed in', async () => {
    const sectionName = 'TestName';
    render(<TestComponent sectionName={sectionName} />);
    await waitFor(() => expect(document.title).toEqual(`${sectionName} | thenewboston`));
  });
  test('expect to have breadcrumb menu rendered from dashboard', () => {
    const breadCrumbClassFromDashboard = 'DashboardLayout__BreadcrumbMenu';
    render(<TestComponent />);
    expect(screen.getByTestId('BreadcrumbMenu')).toHaveClass(breadCrumbClassFromDashboard);
  });
  test('expect to have proper pageName passed in', () => {
    const testPageName = 'DashboardTestPageName';
    render(<TestComponent pageName={testPageName} />);
    expect(screen.getByTestId('BreadcrumbMenu__navigation')).toHaveTextContent(testPageName);
  });
  test('expect to have proper menuItems passed in', () => {
    const testText = 'Dummy Text';
    const testMenuItem = <p>{testText}</p>;
    render(<TestComponent menuItems={testMenuItem} />);
    expect(screen.getByTestId('DashboardLayout__left-menu_test').firstChild?.textContent).toEqual(testText);
  });
  test('expect to have proper children passed in', () => {
    const testText = 'Dummy Text';
    const children = <p>{testText}</p>;
    render(<TestComponent>{children}</TestComponent>);
    expect(screen.getByTestId('DashboardLayout__main-content_test').firstChild?.textContent).toEqual(testText);
  });
});
