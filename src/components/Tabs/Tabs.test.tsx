import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tabs from './index';

const TestTabs = [
  {
    component: <span>Tab 1</span>,
    label: 'FirstTab',
  },
  {
    component: <span>Tab 2</span>,
    label: 'SecondTab',
  },
];

describe('Tabs component', () => {
  test('renders with default testId Tabs', () => {
    render(<Tabs tabs={TestTabs} latestReleaseNumber={1} />);
    const tabs = screen.getByTestId('Tabs');
    expect(tabs).toBeTruthy();
  });

  test('renders with className Tabs', () => {
    render(<Tabs tabs={TestTabs} latestReleaseNumber={1} />);
    const tabs = screen.getByTestId('Tabs');
    expect(tabs).toHaveClass('Tabs');
  });

  test('renders with Download__latest-version', () => {
    render(<Tabs tabs={TestTabs} latestReleaseNumber={1} />);
    const version = screen.getByTestId('Download__latest-version');
    expect(version).toHaveClass('Download__latest-version');
    expect(screen.getByText('Latest Version: 1.0.0-alpha.1')).toBeTruthy();
  });

  test('renders active Tab', () => {
    render(<Tabs tabs={TestTabs} latestReleaseNumber={1} />);
    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[0]).toHaveClass('Tabs__tab');
    expect(tabs[0]).toHaveClass('Tabs__tab--active');
    expect(tabs[0]).toHaveTextContent('FirstTab');
  });

  test('renders secondary Tab', () => {
    render(<Tabs tabs={TestTabs} latestReleaseNumber={1} />);
    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[1]).toHaveClass('Tabs__tab');
    expect(tabs[1]).toHaveTextContent('SecondTab');
  });

  test('renders activeTab as lastTab', () => {
    render(<Tabs tabs={TestTabs} defaultTab={1} latestReleaseNumber={1} />);
    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[1]).toHaveClass('Tabs__tab');
    expect(tabs[1]).toHaveClass('Tabs__tab--active');
  });

  test('check firstTab is inActive if lastTab is Active', () => {
    render(<Tabs tabs={TestTabs} defaultTab={1} latestReleaseNumber={1} />);
    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[0]).toHaveClass('Tabs__tab');
    expect(tabs[0].classList.contains('Tabs__tab--active')).toBeFalsy();
  });

  test('check activeTab changes when selecting inactive SecondTab', () => {
    render(<Tabs tabs={TestTabs} latestReleaseNumber={1} />);
    const tabs = screen.getAllByTestId('Tabs__tab');

    expect(tabs[1]).toHaveTextContent('SecondTab');
    expect(tabs[1].classList.contains('Tabs__tab--active')).toBeFalsy();

    fireEvent.click(tabs[1]);

    expect(tabs[1]).toHaveClass('Tabs__tab--active');
  });
});
