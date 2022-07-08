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
    title: 'Tutorials',
    to: URLS.developerPortal.tutorials,
  },
];

export const resourcesPopoverItems: TopNavPopoverItemType[] = [
  {
    title: 'Media Kit',
    to: ROUTES.assets,
  },
  {
    title: 'Join the Community',
    to: ROUTES.social,
  },
];
