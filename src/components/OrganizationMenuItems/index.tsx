import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const internalNavigationData = [
  {
    name: 'New User Operations',
    url: '/internal/new-user-operations',
  },
  {
    name: 'Team Lead Onboarding',
    url: '/internal/team-lead-onboarding',
  },
  {
    name: 'Product Development',
    url: '/internal/product-development',
  },
];

export const projectProposalsNavigationData = [
  {
    name: 'Overview',
    url: '/project-proposals/overview',
  },
  {
    name: 'Rules & Guidelines',
    url: '/project-proposals/rules',
  },
];

const OrganizationMenuItems: FC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <>
      <MenuGroup title="Internal" urlBase="internal">
        {renderNavLinks(internalNavigationData)}
      </MenuGroup>

      <MenuGroup title="Project Proposals" urlBase="project-proposals">
        {renderNavLinks(projectProposalsNavigationData)}
      </MenuGroup>
    </>
  );
};

export default OrganizationMenuItems;
