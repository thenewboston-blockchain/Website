import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import OrganizationMenuItems, {projectProposalsNavigationData} from '.';

describe('OrganizationMenuItems component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <OrganizationMenuItems />
      </Router>,
    );

    expect(screen.queryByText('Project Proposals')).toBeTruthy();
  });

  it('renders all the NavLinks', () => {
    render(
      <Router>
        <OrganizationMenuItems />
      </Router>,
    );

    projectProposalsNavigationData.forEach((navData) => {
      expect(screen.queryByText(navData.name)).toBeTruthy();
      expect(screen.queryByText(navData.name)).toHaveAttribute('href', navData.url);
    });
  });
});
