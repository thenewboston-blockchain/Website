import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const accountManagerNavigationData = [
  {
    name: 'Get Started',
    url: '/account-manager/get-started',
  },
  {
    name: 'Create an Account',
    url: '/account-manager/create-an-account',
  },
  {
    name: 'Add Friends',
    url: '/account-manager/add-friends',
  },
  {
    name: 'Send Coins',
    url: '/account-manager/send-coins',
  },
  {
    name: 'Edit Nicknames',
    url: '/account-manager/edit-nicknames',
  },
  {
    name: 'Create a Bank',
    url: '/account-manager/create-bank',
  },
  {
    name: 'Create a Validator',
    url: '/account-manager/create-validator',
  },
];

export const bankApiNavigationData = [
  {
    name: 'Accounts',
    url: '/bank-api/accounts',
  },
  {
    name: 'Bank Transactions',
    url: '/bank-api/bank-transactions',
  },
  {
    name: 'Banks',
    url: '/bank-api/banks',
  },
  {
    name: 'Blocks',
    url: '/bank-api/blocks',
  },
  {
    name: 'Clean',
    url: '/bank-api/clean',
  },
  {
    name: 'Config',
    url: '/bank-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/bank-api/confirmation-blocks',
  },
  {
    name: 'Crawl',
    url: '/bank-api/crawl',
  },
  {
    name: 'Invalid Blocks',
    url: '/bank-api/invalid-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/bank-api/connection-requests',
  },
  {
    name: 'Confirmation Services',
    url: '/bank-api/validator-confirmation-services',
  },
  {
    name: 'Upgrade Notice',
    url: '/bank-api/upgrade-notice',
  },
  {
    name: 'Validators',
    url: '/bank-api/validators',
  },
];

export const confirmationValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: '/confirmation-validator-api/accounts',
  },
  {
    name: 'Confirmation Services',
    url: '/confirmation-validator-api/bank-confirmation-services',
  },
  {
    name: 'Banks',
    url: '/confirmation-validator-api/banks',
  },
  {
    name: 'Clean',
    url: '/confirmation-validator-api/clean',
  },
  {
    name: 'Config',
    url: '/confirmation-validator-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/confirmation-validator-api/confirmation-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/confirmation-validator-api/connection-requests',
  },
  {
    name: 'Crawl',
    url: '/confirmation-validator-api/crawl',
  },
  {
    name: 'Primary Validator Updated',
    url: '/confirmation-validator-api/primary-validator-updated',
  },
  {
    name: 'Upgrade Request',
    url: '/confirmation-validator-api/upgrade-request',
  },
  {
    name: 'Validators',
    url: '/confirmation-validator-api/validators',
  },
];

export const governanceNavigationData = [
  {
    name: 'Overview',
    url: '/governance/overview',
  },
  {
    name: 'Usernames & Votes',
    url: '/governance/usernames-and-votes',
  },
  {
    name: 'Locked Coins & Boosting',
    url: '/governance/locked-coins-and-boosting',
  },
  {
    name: 'Points & Refill Logic',
    url: '/governance/points-and-refill-logic',
  },
  {
    name: 'Coins vs. Points',
    url: '/governance/coins-vs-points',
  },
  {
    name: 'Election Process',
    url: '/governance/election-process',
  },
  {
    name: 'Budgets',
    url: '/governance/budgets',
  },
  {
    name: 'Rates & Amounts',
    url: '/governance/rates-and-amounts',
  },
];

export const guideNavigationData = [
  {
    name: 'Introduction',
    url: '/guide/introduction',
  },
  {
    name: 'Accounts',
    url: '/guide/accounts',
  },
  {
    name: 'Blocks',
    url: '/guide/blocks',
  },
  {
    name: 'Transaction Fees',
    url: '/guide/transaction-fees',
  },
  {
    name: 'Root Account File',
    url: '/guide/root-account-file',
  },
  {
    name: 'Nodes',
    url: '/guide/nodes',
  },
  {
    name: 'Blockchain Architecture',
    url: '/guide/blockchain-architecture',
  },
  {
    name: 'Node Identifier',
    url: '/guide/node-identifier',
  },
  {
    name: 'Schedule',
    url: '/guide/schedule',
  },
  {
    name: 'Schedule Adjustments',
    url: '/guide/schedule-adjustments',
  },
  {
    name: 'Fork Prevention',
    url: '/guide/fork-prevention',
  },
  {
    name: 'Best Practices',
    url: '/guide/best-practices',
  },
];

export const primaryValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: '/primary-validator-api/accounts',
  },
  {
    name: 'Bank Blocks',
    url: '/primary-validator-api/bank-blocks',
  },
  {
    name: 'Banks',
    url: '/primary-validator-api/banks',
  },
  {
    name: 'Config',
    url: '/primary-validator-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/primary-validator-api/confirmation-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/primary-validator-api/connection-requests',
  },
  {
    name: 'Validators',
    url: '/primary-validator-api/validators',
  },
];

const DocsMenuItems: FC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <>
      <MenuGroup title="Guide" urlBase="guide">
        {renderNavLinks(guideNavigationData)}
      </MenuGroup>

      <MenuGroup title="Account Manager" urlBase="account-manager">
        {renderNavLinks(accountManagerNavigationData)}
      </MenuGroup>

      <MenuGroup title="Deployment Guides" urlBase="deployment-guide">
        <NavLink to="/deployment-guide/bank">Bank</NavLink>
        <NavLink to="/deployment-guide/validator">Validator</NavLink>
      </MenuGroup>

      <MenuGroup title="Style Guides" urlBase="style-guide">
        <NavLink to="/style-guide/react">React / JSX</NavLink>
        <NavLink to="/style-guide/css">CSS / SASS</NavLink>
      </MenuGroup>

      <MenuGroup title="Governance" urlBase="governance">
        {renderNavLinks(governanceNavigationData)}
      </MenuGroup>

      <MenuGroup title="Bank API" urlBase="bank-api">
        {renderNavLinks(bankApiNavigationData)}
      </MenuGroup>

      <MenuGroup title="Primary Validator API" urlBase="primary-validator-api">
        {renderNavLinks(primaryValidatorApiNavigationData)}
      </MenuGroup>

      <MenuGroup title="Confirmation Validator API" urlBase="confirmation-validator-api">
        {renderNavLinks(confirmationValidatorApiNavigationData)}
      </MenuGroup>
    </>
  );
};

export default DocsMenuItems;
