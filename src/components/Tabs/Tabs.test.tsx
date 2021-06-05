import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tabs, {Tab, TabsProps} from '.';

const TestTabs: Tab[] = [
  {
    component: <span>Tab 1</span>,
    label: 'FirstTab',
  },
  {
    component: <span>Tab 2</span>,
    label: 'SecondTab',
  },
];

const baseProps: TabsProps = {
  latestReleaseNumber: 1,
  tabs: TestTabs,
};

describe('Tabs component', () => {
  test('renders without crashing', () => {
    render(<Tabs {...baseProps} />);

    const tabs = screen.getByTestId('Tabs');
    expect(tabs).toBeTruthy();
  });

  test('renders with default className', () => {
    render(<Tabs {...baseProps} />);

    const tabs = screen.getByTestId('Tabs');
    expect(tabs).toHaveClass('Tabs');
  });

  test('renders latest version text correctly', () => {
    render(<Tabs {...baseProps} />);

    const version = screen.getByTestId('Download__latest-version');
    expect(version).toHaveClass('Download__latest-version');
    expect(version).toHaveTextContent('Latest Version: 1.0.0-alpha.1');
  });

  test('renders first tab as active by default', () => {
    render(<Tabs {...baseProps} />);

    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[0]).toHaveClass('Tabs__tab');
    expect(tabs[0]).toHaveClass('Tabs__tab--active');
    expect(tabs[0]).toHaveTextContent('FirstTab');
  });

  test('renders other tabs as inactive', () => {
    render(<Tabs {...baseProps} />);

    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[1]).toHaveClass('Tabs__tab');
    expect(tabs[1]).toHaveTextContent('SecondTab');
  });

  test('renders a defaultTab as active', () => {
    const props = {...baseProps, defaultTab: 1};
    render(<Tabs {...props} />);

    const tabs = screen.getAllByTestId('Tabs__tab');
    expect(tabs[1]).toHaveClass('Tabs__tab');
    expect(tabs[1]).toHaveClass('Tabs__tab--active');
    expect(tabs[0]).toHaveClass('Tabs__tab');
    expect(tabs[0]).not.toHaveClass('Tabs__tab--active');
  });

  test('renders selected tab as active when pressed', () => {
    render(<Tabs {...baseProps} />);
    const tabs = screen.getAllByTestId('Tabs__tab');

    expect(tabs[1]).toHaveTextContent('SecondTab');
    expect(tabs[1]).not.toHaveClass('Tabs__tab--active');

    fireEvent.click(tabs[1]);

    expect(tabs[1]).toHaveClass('Tabs__tab--active');
  });
});
