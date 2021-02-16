import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const projectProposalsNavigationData = [
  {
    name: 'Overview',
    url: '/project-proposals/overview',
  },
  {
    name: 'Funding',
    url: '/project-proposals/funding',
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
    <MenuGroup title="Project Proposals" urlBase="project-proposals">
      {renderNavLinks(projectProposalsNavigationData)}
    </MenuGroup>
  );
};

export default OrganizationMenuItems;
