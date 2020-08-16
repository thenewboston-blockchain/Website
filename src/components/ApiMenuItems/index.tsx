import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

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
    name: 'Validators',
    url: '/confirmation-validator-api/validators',
  },
];

const ApiMenuItems: FC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <>
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

export default ApiMenuItems;
