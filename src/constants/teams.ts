import {NavOption} from 'types/option';
import {TeamName} from 'types/teams';

export const TeamPathname = {
  all: 'All',
  backEndDevelopers: 'Back-End-Developers',
  community: 'Community',
  design: 'Design',
  devOps: 'DevOps',
  discordManagers: 'Discord-Managers',
  dotnetCore: 'NET-Core',
  frontEndDevelopers: 'Front-End-Developers',
  kotlinSDK: 'Kotlin-SDK',
  marketing: 'Marketing',
  newUserOperations: 'New-User-Operations',
  payments: 'Payments',
  projectProposals: 'Project-Proposals',
  qa: 'QA',
  redditModerators: 'Reddit-Moderators',
  research: 'Research',
  security: 'Security',
  youtube: 'YouTube',
};

export const TEAMS: NavOption[] = [
  {pathname: TeamPathname.all, title: TeamName.all},
  {pathname: TeamPathname.backEndDevelopers, title: TeamName.backEndDevelopers},
  {pathname: TeamPathname.community, title: TeamName.community},
  {pathname: TeamPathname.design, title: TeamName.design},
  {pathname: TeamPathname.devOps, title: TeamName.devOps},
  {pathname: TeamPathname.discordManagers, title: TeamName.discordManagers},
  {pathname: TeamPathname.dotnetCore, title: TeamName.dotnetCore},
  {pathname: TeamPathname.frontEndDevelopers, title: TeamName.frontEndDevelopers},
  {pathname: TeamPathname.kotlinSDK, title: TeamName.kotlinSDK},
  {pathname: TeamPathname.marketing, title: TeamName.marketing},
  {pathname: TeamPathname.newUserOperations, title: TeamName.newUserOperations},
  {pathname: TeamPathname.payments, title: TeamName.payments},
  {pathname: TeamPathname.projectProposals, title: TeamName.projectProposals},
  {pathname: TeamPathname.qa, title: TeamName.qa},
  {pathname: TeamPathname.redditModerators, title: TeamName.redditModerators},
  {pathname: TeamPathname.research, title: TeamName.research},
  {pathname: TeamPathname.security, title: TeamName.security},
  {pathname: TeamPathname.youtube, title: TeamName.youtube},
];
