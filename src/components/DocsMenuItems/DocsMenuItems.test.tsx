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

const testHelper = (data: NavigationData[], type: string) => {
  data.forEach((item: NavigationData) => {
    describe(`NavigationData name: '${item.name}' url: '${item.url}'`, () => {
      test(`should render link with text ${item.name}`, () => {
        render(
          <Router>
            <DocsMenuItems />
          </Router>,
        );
        const link = screen.getByTestId(`${type}-${item.name}`);
        expect(link).toBeTruthy();
        expect(link).toHaveTextContent(item.name);
      });

      test(`should render link with url ${item.url}`, () => {
        render(
          <Router>
            <DocsMenuItems />
          </Router>,
        );
        const link = screen.getByTestId(`${type}-${item.name}`);
        expect(link).toBeTruthy();
        expect(link?.getAttribute('href')).toEqual(item.url);
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
    testHelper(guideNavigationData, 'Guide');
  });

  describe('renders AccountManager links', () => {
    testHelper(accountManagerNavigationData, 'AccountManager');
  });

  describe('renders Governance links', () => {
    testHelper(governanceNavigationData, 'Governance');
  });

  describe('renders BankAPI links', () => {
    testHelper(bankApiNavigationData, 'BankAPI');
  });

  describe('renders ConfirmationValidatorAPI links', () => {
    testHelper(confirmationValidatorApiNavigationData, 'ConfirmationValidatorAPI');
  });

  describe('renders PrimaryValidatorAPI links', () => {
    testHelper(primaryValidatorApiNavigationData, 'PrimaryValidatorAPI');
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
    testHelper(deploymentGuideNavigationData, 'DeploymentGuide');
  });

  describe('renders StyleGuide links', () => {
    const styleGuideNavigationData = [
      {
        name: 'React / JSX',
        url: '/style-guide/react',
      },
      {
        name: 'CSS / SASS',
        url: '/style-guide/css',
      },
    ];
    testHelper(styleGuideNavigationData, 'StyleGuide');
  });
});
