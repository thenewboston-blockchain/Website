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
    </>
  );
};

export default DocsMenuItems;
