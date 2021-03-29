import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProjectsMenuItems, {projectsNavigationData} from '.';

describe('ProjectsMenuItems component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <ProjectsMenuItems />
      </Router>,
    );

    expect(screen.queryByText('Projects')).toBeTruthy();
  });

  it('renders all the NavLinks', () => {
    render(
      <Router>
        <ProjectsMenuItems />
      </Router>,
    );

    projectsNavigationData.forEach((navData) => {
      expect(screen.queryByText(navData.name)).toBeTruthy();
      expect(screen.queryByText(navData.name)).toHaveAttribute('href', navData.url);
    });
  });
});
