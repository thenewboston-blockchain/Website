import {ROUTES, URLS} from 'constants/routes';
import {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';

export const developerPopoverItems: TopNavPopoverItemType[] = [
  {
    isExternal: true,
    newWindow: false,
    title: 'Home',
    to: URLS.developerPortal.home,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'Living Whitepaper',
    to: URLS.developerPortal.whitepaper,
  },
  {
    title: 'Tutorials',
    to: ROUTES.tutorials,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'Projects',
    to: URLS.developerPortal.projects,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'APIs',
    to: URLS.developerPortal.api,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'Node Deployment',
    to: URLS.developerPortal.nodeDeployment,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'SDKs &  Libraries',
    to: URLS.developerPortal.sdkAndLibraries,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'Utilities',
    to: URLS.developerPortal.utilities,
  },
];

export const getTNBCPopoverItems: TopNavPopoverItemType[] = [
  {
    title: 'Bounties',
    to: ROUTES.bounties,
  },
  {
    title: 'Careers',
    to: ROUTES.openings,
  },
  {
    isExternal: true,
    newWindow: true,
    title: 'Faucet',
    to: URLS.apps.faucet,
  },
  {
    isExternal: true,
    newWindow: false,
    title: 'Create Projects',
    to: URLS.developerPortal.projects,
  },
  {
    title: 'Play Games',
    to: ROUTES.arcade,
  },
];

export const resourcesPopoverItems: TopNavPopoverItemType[] = [
  {
    title: 'Roadmap',
    to: ROUTES.roadmap,
  },
  {
    title: 'FAQ',
    to: ROUTES.faq,
  },
  {
    isExternal: true,
    newWindow: true,
    title: 'Blog',
    to: URLS.blog,
  },
  {
    title: 'Analytics',
    to: ROUTES.analytics,
  },
  {
    title: 'Media Kit',
    to: ROUTES.assets,
  },
  {
    title: 'Meet the Team',
    to: ROUTES.teams,
  },
  {
    title: 'About Us',
    to: ROUTES.aboutUs,
  },
  {
    title: 'Join the Community',
    to: ROUTES.social,
  },
  {
    title: 'Donate',
    to: ROUTES.donate,
  },
];
