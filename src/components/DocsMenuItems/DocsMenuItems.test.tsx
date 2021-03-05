import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import DocsMenuItems, {
  governanceNavigationData,
  accountManagerNavigationData,
  bankApiNavigationData,
  confirmationValidatorApiNavigationData,
  guideNavigationData,
  primaryValidatorApiNavigationData,
} from './index';

interface NavigationData {
  name: string;
  url: string;
}

const testHelper = (data: NavigationData[]) => {
  data.forEach((item: NavigationData) => {
    describe(`NavigationData name: '${item.name}' url: '${item.url}'`, () => {
      test(`should render link with text ${item.name}`, () => {
        render(
          <Router>
            <DocsMenuItems />
          </Router>,
        );
        const el = screen.getByRole(`group-${item.name}`);
        expect(el).toBeTruthy();
        expect(el).toHaveTextContent(item.name);
      });

      test(`should render link with url ${item.url}`, () => {
        render(
          <Router>
            <DocsMenuItems />
          </Router>,
        );
        const el = screen.getByTestId(`group-${item.name}`);
        expect(el).toBeTruthy();
        expect(el?.getAttribute('href')).toEqual(item.url);
      });
    });
  });
};

describe('DocsMenuItems component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <DocsMenuItems />
      </Router>,
    );
    expect(screen.getByTestId('DocsMenuItems')).toBeTruthy();
  });

  describe('renders Guide links', () => {
    testHelper(guideNavigationData);
  });

  describe('renders AccountManager links', () => {
    testHelper(accountManagerNavigationData);
  });

  describe('renders Governance links', () => {
    testHelper(governanceNavigationData);
  });

  describe('renders BankAPI links', () => {
    testHelper(bankApiNavigationData);
  });

  describe('renders ConfirmationValidatorAPI links', () => {
    testHelper(confirmationValidatorApiNavigationData);
  });

  describe('renders PrimaryValidatorAPI links', () => {
    testHelper(primaryValidatorApiNavigationData);
  });

  describe('renders DeploymentGuide links', () => {
    const deploymentGuideNavigationData = [
      {
        name: 'Bank',
        url: '/deployment-guide/bank',
      },
      {
        name: 'Validator',
        url: '/deployment-guide/validator',
      },
    ];
    testHelper(deploymentGuideNavigationData);
  });

  describe('renders StyleGuide links', () => {
    const styleGuideNavigationData = [
      {
        name: 'React',
        url: '/style-guide/react',
      },
      {
        name: 'CSS',
        url: '/style-guide/css',
      },
    ];
    testHelper(styleGuideNavigationData);
  });
});
