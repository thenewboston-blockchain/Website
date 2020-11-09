export enum TeamName {
  all = 'All',
  backEndDevelopers = 'Back-End Developers',
  community = 'Community',
  design = 'Design',
  discordManagers = 'Discord Managers',
  frontEndDevelopers = 'Front-End Developers',
  kotlinSDK = 'Kotlin SDK',
  marketing = 'Marketing',
  payments = 'Payments',
  qa = 'QA',
  redditModerators = 'Reddit Moderators',
  security = 'Security',
  slackManagers = 'Slack Managers',
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

interface TeamContributor {
  contributor: Contributor;
  createdDate: string;
  isLead: boolean;
  payPerDay: number;
  team: Team;
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
