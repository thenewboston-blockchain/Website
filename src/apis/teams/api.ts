import axios from 'axios';

import {PaginatedResponse} from 'types/api';
import {Team} from 'types/teams';
import {CoreTeamResponse, TeamMemberResponse} from './types';

export async function getTeamById(id: string): Promise<Team | null> {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/teams/${id}`);
  return response.data ? response.data : null;
}

export async function getCoreTeams(): Promise<CoreTeamResponse[]> {
  const response = await axios.get<PaginatedResponse<CoreTeamResponse>>(
    `${process.env.REACT_APP_BACKEND_API}/core_teams`,
  );

  if (!response.data) {
    throw new Error('Error while fetching core teams, please try again.');
  }

  return response.data.results;
}

export async function getTeamMemberByUserId(id: string): Promise<TeamMemberResponse | null> {
  const response = await axios.get<PaginatedResponse<TeamMemberResponse>>(
    `${process.env.REACT_APP_BACKEND_API}/teams_members?user=${id}`,
  );
  return response.data ? response.data.results[0] : null;
}
