export enum TeamName {
  all = 'All',
  backEndDevelopers = 'Back-End Developers',
  community = 'Community',
  design = 'Design',
  frontEndDevelopers = 'Front-End Developers',
  redditModerators = 'Reddit Moderators',
  slackManagers = 'Slack Managers',
  youtubers = 'YouTubers',
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
  displayName: string;
  githubUsername: string;
  isLead: boolean;
  payPerDay: number;
  profileImage: string;
  slackUsername: string;
  teams: TeamLead[];
  titles: string[];
}
