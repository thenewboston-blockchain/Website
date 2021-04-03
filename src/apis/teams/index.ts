import axios from 'axios';

import {APIArrayResponse} from 'types/api';
import {GetTeamResponse, GetTeamMemberResponse} from 'types/teams';

export async function getTeams(): Promise<APIArrayResponse<GetTeamResponse[]>> {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}teams`);
}

export async function getTeamMembers(): Promise<APIArrayResponse<GetTeamMemberResponse[]>> {
  return axios.get(`${process.env.REACT_APP_BACKEND_API}team_members`);
}
