import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import OrganizationMenuItems, {projectProposalsNavigationData} from './index';

describe('OrganizationMenuItems component', () => {
  test('renders default component', async () => {
    render(
      <Router>
        <OrganizationMenuItems />
      </Router>,
    );

    expect(screen.queryByText('Project Proposals')).toBeTruthy();
  });

  test('renders NavLinks', () => {
    render(
      <Router>
        <OrganizationMenuItems />
      </Router>,
    );

    projectProposalsNavigationData.forEach((navData) => {
      expect(screen.queryByText(navData.name)).toBeTruthy();
      expect(screen.queryByText(navData.name)).toHaveAttribute('href');
      expect(screen.queryByText(navData.name)?.getAttribute('href')).toEqual(navData.url);
    });
  });
});
