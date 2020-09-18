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
    name: 'Send Points',
    url: '/account-manager/send-points',
  },
  {
    name: 'Edit Nicknames',
    url: '/account-manager/edit-nicknames',
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

const GuideMenuItems: FC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <>
      <MenuGroup title="Account Manager" urlBase="account-manager">
        {renderNavLinks(accountManagerNavigationData)}
      </MenuGroup>

      <MenuGroup title="Guide" urlBase="guide">
        {renderNavLinks(guideNavigationData)}
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

export default GuideMenuItems;
