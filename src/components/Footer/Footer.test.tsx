import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Footer from './index';

interface Props {
  className?: string;
}

// copied from footer,
// however this could be mocked or come from a CMS
const TestCases = [
  {
    header: 'Get Started',
    links: [
      {
        title: 'Documentation',
        url: '/guide/introduction',
      },
      {
        title: 'Tasks',
        url: '/tasks',
      },
      {
        title: 'Download',
        url: '/download',
      },
    ],
  },
  {
    header: 'Community',
    links: [
      {
        title: 'Join the Community!',
        url: '/social',
      },
      {
        title: 'Openings',
        url: '/openings',
      },
      {
        title: 'Team',
        url: '/teams',
      },
      {
        title: 'Leaderboard',
        url: '/leaderboard/All',
      },
    ],
  },
  {
    header: 'More',
    links: [
      {
        title: 'Project Proposals',
        url: '/project-proposals/overview',
      },
      {
        isExternal: true,
        title: 'Blog',
        url: 'https://thenewboston.blog/',
      },
      {
        title: 'Assets',
        url: '/assets',
      },
      {
        title: 'FAQ',
        url: '/faq',
      },
      {
        title: 'Donate',
        url: '/donate',
      },
    ],
  },
];

const WrappedComponent = ({className}: Props) => {
  return (
    <Router>
      <Footer className={className} />
    </Router>
  );
};
describe('Footer component', () => {
  test('renders Footer component', () => {
    render(<WrappedComponent />);
    const el = screen.getByTestId('Footer');
    expect(el.className).toContain('Footer');
  });

  test('renders Footer component with custom className', () => {
    render(<WrappedComponent className="CustomFooter" />);
    const el = screen.getByTestId('Footer');
    expect(el.className).toContain('CustomFooter');

    const logo = screen.getByAltText('thenewboston logo');
    expect(logo).toBeTruthy();
  });

  test('check Footer component for links and navList', () => {
    render(<WrappedComponent className="CustomFooter" />);
    const footer = screen.getByTestId('Footer');

    const socialMediaLinks = footer.querySelectorAll('.Footer__SocialMediaLink');
    expect(socialMediaLinks.length).toEqual(10);

    const navLists = footer.querySelectorAll('.FooterNavList');
    expect(navLists.length).toEqual(3);

    TestCases.forEach((testCase, index) => {
      const item = navLists[index];
      expect(item).toBeTruthy();
      expect(item.className).toContain('FooterNavList');

      const header = item.querySelector('.FooterNavList__header');
      expect(header).toBeTruthy();
      expect(header?.innerHTML).toEqual(testCase.header);

      const links = item.querySelectorAll('.FooterNavList__item');
      expect(links.length).toEqual(testCase.links.length);

      // check content and href for each link
    });
  });
});
