export enum TeamName {
  all = 'All',
  audit = 'Audit',
  blockchain = 'Blockchain',
  community = 'Community',
  design = 'Design',
  frontEnd = 'Front-End',
  humanResources = 'Human Resources',
  marketing = 'Marketing',
  websiteApi = 'Website API',
}

interface Contributor {
  contributorId: string;
  displayName: string;
  githubUsername: string;
  profileImage: string;
  slackUsername: string;
}

export interface TeamPlatform {
  label: string;
  link: string;
  name: string;
}

export interface TeamResponsibility {
  item: string;
  subitems: string[];
}

export interface Team {
  contributors: TeamContributor[];
  description: string;
  platforms: TeamPlatform[];
  title: string;
  responsibilities: TeamResponsibility[];
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
  resource?: string;
  team: string;
  tab?: TeamTabOptions;
}

export enum TeamTabOptions {
  members = 'Members',
  overview = 'Overview',
  resources = 'Resources',
}
