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
    name: 'Config',
    url: '/bank-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/bank-api/confirmation-blocks',
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
    name: 'Banks',
    url: '/guide/banks',
  },
  {
    name: 'Validators',
    url: '/guide/validators',
  },
  {
    name: 'Confirmation Validators',
    url: '/guide/confirmation-validators',
  },
  {
    name: 'Confirmation Services',
    url: '/guide/confirmation-services',
  },
  {
    name: 'Node Identifiers',
    url: '/guide/node-identifiers',
  },
  {
    name: 'Resync Triggers',
    url: '/guide/resync-triggers',
  },
  {
    name: 'Resync Process',
    url: '/guide/resync-process',
  },
  {
    name: 'Trust',
    url: '/guide/trust',
  },
  {
    name: 'Initial Funds',
    url: '/guide/initial-funds',
  },
  {
    name: 'Best Practices',
    url: '/guide/best-practices',
  },
  {
    name: 'Future Development',
    url: '/guide/future-development',
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
