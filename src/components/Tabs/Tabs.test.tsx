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

  test('renders latest version text correctly', () => {
    render(<Tabs {...baseProps} />);

    const version = screen.getByTestId('Download__latest-version');
    expect(version).toHaveClass('Download__latest-version');
    expect(version).toHaveTextContent('Latest Version: 1.0.0-alpha.1');
  });

  test('renders only first tab as active by default', () => {
    render(<Tabs className="Test" {...baseProps} />);

    const tabs = screen.getAllByTestId('Tabs__tab');

    expect(tabs[0]).toHaveClass('Test__tab');
    expect(tabs[0]).toHaveClass('Test__tab--active');
    expect(tabs[0]).toHaveTextContent('FirstTab');
    expect(tabs[1]).toHaveClass('Test__tab');
    expect(tabs[1]).not.toHaveClass('Test__tab--active');
    expect(tabs[1]).toHaveTextContent('SecondTab');
  });

  test('renders a defaultTab as active', () => {
    const props = {...baseProps, defaultTab: 1};
    render(<Tabs className="Test" {...props} />);

    const tabs = screen.getAllByTestId('Tabs__tab');

    expect(tabs[1]).toHaveClass('Test__tab');
    expect(tabs[1]).toHaveClass('Test__tab--active');
    expect(tabs[0]).toHaveClass('Test__tab');
    expect(tabs[0]).not.toHaveClass('Test__tab--active');
  });

  test('renders selected tab as active when pressed', () => {
    render(<Tabs className="Test" {...baseProps} />);
    const tabs = screen.getAllByTestId('Tabs__tab');

    expect(tabs[1]).toHaveTextContent('SecondTab');
    expect(tabs[1]).not.toHaveClass('Test__tab--active');

    fireEvent.click(tabs[1]);

    expect(tabs[1]).toHaveClass('Test__tab--active');
  });
});
