import {User} from 'types/app/User';

export enum TeamName {
  all = 'All',
  audit = 'Audit',
  backEnd = 'Back-End',
  blockchain = 'Blockchain',
  community = 'Community',
  design = 'Design',
  devOps = 'DevOps',
  education = 'Education',
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

export interface TeamContributor {
  contributor: Contributor;
  createdDate: string;
  isLead: boolean;
  title: string;
}

export interface Team {
  team_members_meta: TeamMember[];
  created_date: string;
  modified_date: string;
  pk: string;
  title: string;
  about: string;
  responsibilities: string;
  github: string;
  slack: string;
}

export interface TeamMember {
  contributorId: string;
  discordUsername: string;
  displayName: string;
  githubUsername: string;
  hourlyRate: number;
  profileImage: string;
  teams: string;
  titles: string[];
  is_lead: boolean;
  job_title: string;
  user: User;
}

export interface CoreTeamMember extends TeamMember {
  hourlyRate: number;
  coreTeam: string;
}

export interface ProjectTeamMember extends TeamMember {
  project: string;
}

export interface GetTeamResponse {
  team_members_meta: GetTeamMemberResponse[];
  created_date: string;
  modified_date: string;
  pk: string;
  title: string;
  about: string;
  responsibilities: string;
  github: string;
  slack: string;
  discord: string;
}

export interface GetTeamMemberResponse {
  user: string; // foreign key to user
  is_lead: boolean;
  team: string; // foreign key to team
  pk: string;
  job_title: string;
  modified_date: string;
  created_date: string;
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
