import {User} from 'types/app/User';

export type TeamResponse = {
  team_members_meta: TeamMemberResponse[];
  created_date: string;
  modified_date: string;
  pk: string;
  title: string;
  about: string;
  responsibilities: string[];
  github: string;
  discord: string;
};

export type TeamMemberResponse = {
  user: User;
  is_lead: boolean;
  team: string; // foreign key to team
  pk: string;
  job_title: string;
  modified_date: string;
  created_date: string;
};

export type CoreTeamResponse = Omit<TeamResponse, 'team_members_meta'> & {
  core_members_meta: CoreTeamMemberResponse[];
};

export type CoreTeamMemberResponse = TeamMemberResponse & {
  weekly_commitment_hours: number;
  hourly_rate: number;
  core_team: string; // foreign key to core team
};
