import {EMAIL} from './contact';

// Internal URLs
export const ROUTES = {
  aboutUs: '/about-us',
  analytics: '/analytics',
  arcade: '/arcade',
  assets: '/assets',
  bounties: '/bounties',
  createAccount: '/create-account',
  deploymentGuide: '/deployment-guide',
  donate: '/donate',
  download: '/download',
  faq: '/faq',
  guidelines: '/guidelines',
  openings: '/openings',
  privacyPolicy: '/privacy-policy',
  progress: '/progress',
  roadmap: '/roadmap',
  signin: 'sign-in',
  signout: '/sign-out',
  social: '/social',
  styleGuide: '/style-guide',
  teams: '/teams',
  termsOfUse: '/terms-of-use',
  tutorials: '/tutorials',
  users: '/users',
  wallet: '/wallet',
};

// External URLs
const developerPortalUrl = 'https://developer.thenewboston.com';

export const URLS = {
  apps: {
    faucet: 'https://tnbfaucet.com/',
  },
  blog: 'https://blog.thenewboston.com',
  contact: `mailto:${EMAIL}`,
  developerPortal: {
    api: `${developerPortalUrl}/api`,
    home: developerPortalUrl,
    projects: `${developerPortalUrl}/projects`,
    sdkAndLibraries: `${developerPortalUrl}/developer-tools`,
    whitepaper: `${developerPortalUrl}/whitepaper`,
  },
  discord: 'https://discord.com/invite/thenewboston',
  github: 'https://github.com/thenewboston-developers',
  tnbFaucet: 'https://tnbfaucet.com',
};
