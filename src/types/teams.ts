export enum TeamName {
  all = 'All',
  backEndDevelopers = 'Back-End Developers',
  community = 'Community',
  design = 'Design',
  devOps = 'DevOps',
  discordManagers = 'Discord Managers',
  dotnetCore = '.NET Core',
  frontEndDevelopers = 'Front-End Developers',
  kotlinSDK = 'Kotlin SDK',
  marketing = 'Marketing',
  newUserOperations = 'New User Operations',
  payments = 'Payments',
  projectProposals = 'Project Proposals',
  qa = 'QA',
  redditModerators = 'Reddit Moderators',
  research = 'Research',
  security = 'Security',
  youtube = 'YouTube',
}

interface Contributor {
  contributorId: string;
  displayName: string;
  githubUsername: string;
  profileImage: string;
  slackUsername: string;
}

export interface Team {
  contributors: TeamContributor[];
  title: string;
}

export interface TeamContributor {
  contributor: Contributor;
  createdDate: string;
  isLead: boolean;
  payPerDay: number;
  title: string;
}

interface TeamLead {
  title: string;
  isLead: boolean;
}

export interface TeamMember {
  contributorId: string;
  displayName: string;
  githubUsername: string;
  isLead: boolean;
  payPerDay: number;
  profileImage: string;
  slackUsername: string;
  teams: TeamLead[];
  titles: string[];
}

export interface TeamsUrlParams {
  team: string;
}
