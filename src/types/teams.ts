export enum TeamName {
  all = 'All',
  analytics = 'Analytics',
  backEndDevelopers = 'Back-End Developers',
  frontEndDevelopers = 'Front-End Developers',
  design = 'Design',
  marketing = 'Marketing',
  linkedinManager = 'LinkedIn Manager',
  seo = 'SEO',
  slackManager = 'Slack Manager',
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
