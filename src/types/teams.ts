export enum TeamName {
  all = 'All',
  audit = 'Audit',
  backEnd = 'Back-End',
  blockchain = 'Blockchain',
  community = 'Community',
  design = 'Design',
  devOps = 'DevOps',
  frontEnd = 'Front-End',
  marketing = 'Marketing',
}

interface Contributor {
  contributorId: string;
  discordUsername: string;
  displayName: string;
  githubUsername: string;
  profileImage: string;
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
  title: string;
}

export interface TeamMember {
  contributorId: number;
  discordUsername: string;
  displayName: string;
  githubUsername: string;
  hourlyRate: number;
  isLead: boolean;
  profileImage: string;
  team: string;
  title: string;
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
