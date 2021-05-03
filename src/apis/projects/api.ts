import axios from 'axios';

import {PaginatedResponse} from 'types/api';
import {Project, Milestone} from 'types/projects';

export async function getProjects(): Promise<Project[]> {
  const response = await axios.get<PaginatedResponse<Project>>(`${process.env.REACT_APP_BACKEND_API}/projects`);

  if (!response.data) {
    throw new Error('Error while fetching projects, please try again.');
  }
  return response.data.results;
}

export async function getMilestones(): Promise<Milestone[]> {
  const response = await axios.get<PaginatedResponse<Milestone>>(`${process.env.REACT_APP_BACKEND_API}/milestones`);
  if (!response.data) {
    throw new Error('Error while fetching milestones, please try again.');
  }
  return response.data.results;
}

export async function getMilestonesByProject(id: string): Promise<Milestone[]> {
  const response = await axios.get<PaginatedResponse<Milestone>>(
    `${process.env.REACT_APP_BACKEND_API}/milestones?project=${id}`,
  );
  if (!response.data) {
    throw new Error('Error while fetching milestones, please try again.');
  }
  return response.data.results;
}

export async function getProjectMemberById(id: string) {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/project_members/${id}`);
  if (!response.data) {
    throw new Error('Error while fetching project member, please try again.');
  }
  return response.data;
}
