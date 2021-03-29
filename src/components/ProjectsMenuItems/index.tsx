import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const projectsNavigationData = [
  {
    name: 'Overview',
    url: '/projects/overview',
  },
  {
    name: 'Rules & Guidelines',
    url: '/projects/rules',
  },
  {
    name: 'Proposal Submission Process',
    url: '/projects/proposals',
  },
  {
    name: 'Milestones & Payouts',
    url: '/projects/milestones',
  },
];

const ProjectsMenuItems: FC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <MenuGroup title="Projects" urlBase="projects">
      {renderNavLinks(projectsNavigationData)}
    </MenuGroup>
  );
};

export default ProjectsMenuItems;
