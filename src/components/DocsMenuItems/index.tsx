import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const walletNavigationData = [
  {
    name: 'Get Started',
    url: '/wallet/get-started',
  },
  {
    name: 'Create an Account',
    url: '/wallet/create-an-account',
  },
  {
    name: 'Recover an Account',
    url: '/wallet/recover-an-account',
  },
  {
    name: 'Add Friends',
    url: '/wallet/add-friends',
  },
  {
    name: 'Send Coins',
    url: '/wallet/send-coins',
  },
  {
    name: 'Edit Nicknames',
    url: '/wallet/edit-nicknames',
  },
  {
    name: 'Create a Bank',
    url: '/wallet/create-bank',
  },
  {
    name: 'Create a Validator',
    url: '/wallet/create-validator',
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
    name: 'Glossary',
    url: '/guide/glossary',
  },
  {
    name: 'Blocks',
    url: '/guide/blocks',
  },
  {
    name: 'Block Structure',
    url: '/guide/block-structure',
  },
  {
    name: 'Block Types',
    url: '/guide/block-types',
  },
  {
    name: 'Nodes',
    url: '/guide/nodes',
  },
  {
    name: 'Flows',
    url: '/guide/flows',
  },
  {
    name: 'Fork Prevention',
    url: '/guide/fork-prevention',
  },
  {
    name: 'Scheduling',
    url: '/guide/scheduling',
  },
  {
    name: 'Schedule Adjustments',
    url: '/guide/schedule-adjustments',
  },
  {
    name: 'Accounts',
    url: '/guide/accounts',
  },
  {
    name: 'Account Lock',
    url: '/guide/account-lock',
  },
  {
    name: 'Node Identifier',
    url: '/guide/node-identifier',
  },
  {
    name: 'Fees',
    url: '/guide/fees',
  },
  {
    name: 'Best Practices',
    url: '/guide/best-practices',
  },
  {
    name: 'Root Account File',
    url: '/guide/root-account-file',
  },
  {
    name: 'Blockchain Architecture',
    url: '/guide/blockchain-architecture',
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

      <MenuGroup title="Governance" urlBase="governance">
        {renderNavLinks(governanceNavigationData)}
      </MenuGroup>

      <MenuGroup title="Wallet" urlBase="wallet">
        {renderNavLinks(walletNavigationData)}
      </MenuGroup>

      <MenuGroup title="Deployment Guides" urlBase="deployment-guide">
        <NavLink to="/deployment-guide/bank">Bank</NavLink>
        <NavLink to="/deployment-guide/validator">Validator</NavLink>
      </MenuGroup>

      <MenuGroup title="Style Guides" urlBase="style-guide">
        <NavLink to="/style-guide/react">React / JSX</NavLink>
        <NavLink to="/style-guide/css">CSS / SASS</NavLink>
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
