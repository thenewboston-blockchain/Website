import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const bankApiNavigationData = [
  {
    name: 'Accounts',
    url: '/developer/api/bank-api/accounts',
  },
  {
    name: 'Bank Transactions',
    url: '/developer/api/bank-api/bank-transactions',
  },
  {
    name: 'Banks',
    url: '/developer/api/bank-api/banks',
  },
  {
    name: 'Blocks',
    url: '/developer/api/bank-api/blocks',
  },
  {
    name: 'Clean',
    url: '/developer/api/bank-api/clean',
  },
  {
    name: 'Config',
    url: '/developer/api/bank-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/developer/api/bank-api/confirmation-blocks',
  },
  {
    name: 'Crawl',
    url: '/developer/api/bank-api/crawl',
  },
  {
    name: 'Invalid Blocks',
    url: '/developer/api/bank-api/invalid-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/developer/api/bank-api/connection-requests',
  },
  {
    name: 'Confirmation Services',
    url: '/developer/api/bank-api/validator-confirmation-services',
  },
  {
    name: 'Upgrade Notice',
    url: '/developer/api/bank-api/upgrade-notice',
  },
  {
    name: 'Validators',
    url: '/developer/api/bank-api/validators',
  },
];

export const confirmationValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: '/developer/api/confirmation-validator-api/accounts',
  },
  {
    name: 'Confirmation Services',
    url: '/developer/api/confirmation-validator-api/bank-confirmation-services',
  },
  {
    name: 'Banks',
    url: '/developer/api/confirmation-validator-api/banks',
  },
  {
    name: 'Clean',
    url: '/developer/api/confirmation-validator-api/clean',
  },
  {
    name: 'Config',
    url: '/developer/api/confirmation-validator-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/developer/api/confirmation-validator-api/confirmation-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/developer/api/confirmation-validator-api/connection-requests',
  },
  {
    name: 'Crawl',
    url: '/developer/api/confirmation-validator-api/crawl',
  },
  {
    name: 'Primary Validator Updated',
    url: '/developer/api/confirmation-validator-api/primary-validator-updated',
  },
  {
    name: 'Upgrade Request',
    url: '/developer/api/confirmation-validator-api/upgrade-request',
  },
  {
    name: 'Validators',
    url: '/developer/api/confirmation-validator-api/validators',
  },
];

export const primaryValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: '/developer/api/primary-validator-api/accounts',
  },
  {
    name: 'Bank Blocks',
    url: '/developer/api/primary-validator-api/bank-blocks',
  },
  {
    name: 'Banks',
    url: '/developer/api/primary-validator-api/banks',
  },
  {
    name: 'Config',
    url: '/developer/api/primary-validator-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/developer/api/primary-validator-api/confirmation-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/developer/api/primary-validator-api/connection-requests',
  },
  {
    name: 'Validators',
    url: '/developer/api/primary-validator-api/validators',
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
      <MenuGroup title="Bank API" urlBase="developer/api/bank-api">
        {renderNavLinks(bankApiNavigationData)}
      </MenuGroup>

      <MenuGroup title="Primary Validator API" urlBase="developer/api/primary-validator-api">
        {renderNavLinks(primaryValidatorApiNavigationData)}
      </MenuGroup>

      <MenuGroup title="Confirmation Validator API" urlBase="developer/api/confirmation-validator-api">
        {renderNavLinks(confirmationValidatorApiNavigationData)}
      </MenuGroup>
    </>
  );
};

export default DocsMenuItems;
