import {ROUTES, URLS} from 'constants/routes';
import {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';

export const developerPopoverItems: TopNavPopoverItemType[] = [
  {
    isExternal: true,
    title: 'Home',
    to: URLS.developerPortal.home,
  },
  {
    isExternal: true,
    title: 'Living Whitepaper',
    to: URLS.developerPortal.whitepaper,
  },
  {
    title: 'Tutorials',
    to: ROUTES.tutorials,
  },
  {
    isExternal: true,
    title: 'Projects',
    to: URLS.developerPortal.projects,
  },
  {
    isExternal: true,
    title: 'APIs',
    to: URLS.developerPortal.api,
  },
  {
    isExternal: true,
    title: 'SDKs &  Libraries',
    to: URLS.developerPortal.sdkAndLibraries,
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
    title: 'Faucet',
    to: URLS.apps.faucet,
  },
  {
    isExternal: true,
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
    title: 'Donate',
    to: ROUTES.donate,
  },
];
