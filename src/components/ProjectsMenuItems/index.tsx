import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const projectsNavigationData = [
  {
    name: 'Overview',
    url: '/project-rules/overview',
  },
  {
    name: 'Rules & Guidelines',
    url: '/project-rules/rules',
  },
  {
    name: 'Proposal Submission Process',
    url: '/project-rules/proposals',
  },
  {
    name: 'Milestones & Payouts',
    url: '/project-rules/milestones',
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
    <MenuGroup title="Projects" urlBase="project-rules">
      {renderNavLinks(projectsNavigationData)}
    </MenuGroup>
  );
};

export default ProjectsMenuItems;
