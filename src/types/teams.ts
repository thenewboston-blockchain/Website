import {User} from 'types/app/User';

export type Team = {
  team_members_meta: TeamMember[];
  created_date: string;
  modified_date: string;
  pk: string;
  title: string;
  about: string;
  responsibilities: string[];
  github: string;
  discord: string;
};

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

export type CoreTeam = Omit<Team, 'team_members_meta'> & {
  core_members_meta: CoreTeamMember[];
};

export type TeamMember = {
  is_lead: boolean;
  job_title: string;
  pk: string;
  user: User;
};

export type CoreTeamMember = TeamMember & {
  weekly_commitment_hours: number;
  hourly_rate: number;
  core_team: string; // foreign key to core team
};

export type ProjectTeamMember = TeamMember & {
  project: string;
};

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
