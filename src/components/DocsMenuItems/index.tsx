import React from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {ROUTES} from 'constants/routes';
import {SFC} from 'types/generic';
import {NavigationItem} from 'types/navigation';

export const walletNavigationData = [
  {
    name: 'Get Started',
    url: `${ROUTES.wallet}/get-started`,
  },
  {
    name: 'Create an Account',
    url: `${ROUTES.wallet}/create-an-account`,
  },
  {
    name: 'Recover an Account',
    url: `${ROUTES.wallet}/recover-an-account`,
  },
  {
    name: 'Add Friends',
    url: `${ROUTES.wallet}/add-friends`,
  },
  {
    name: 'Send Coins',
    url: `${ROUTES.wallet}/send-coins`,
  },
  {
    name: 'Edit Nicknames',
    url: `${ROUTES.wallet}/edit-nicknames`,
  },
  {
    name: 'Create a Bank',
    url: `${ROUTES.wallet}/create-bank`,
  },
  {
    name: 'Create a Validator',
    url: `${ROUTES.wallet}/create-validator`,
  },
];

const DocsMenuItems: SFC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <>
      <MenuGroup title="Wallet" urlBase="wallet">
        {renderNavLinks(walletNavigationData)}
      </MenuGroup>
    </>
  );
};

export default DocsMenuItems;
