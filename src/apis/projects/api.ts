import axios from 'axios';

import {APIArrayResponse} from 'types/api';
import {Project, Milestone} from 'types/projects';

export async function getProjects(): Promise<Project[]> {
  const response = await axios.get<APIArrayResponse<Project>>(`${process.env.REACT_APP_BACKEND_API}/projects`);

  if (!response.data) {
    throw new Error('Error while fetching projects, please try again.');
  }
  return response.data.results;
}

export async function getMilestones(): Promise<Milestone[]> {
  const response = await axios.get<APIArrayResponse<Milestone>>(`${process.env.REACT_APP_BACKEND_API}/milestones`);
  if (!response.data) {
    throw new Error('Error while fetching milestones, please try again.');
  }
  return response.data.results;
}

export async function getMilestonesByProject(id: string): Promise<Milestone[]> {
  const response = await axios.get<APIArrayResponse<Milestone>>(
    `${process.env.REACT_APP_BACKEND_API}/milestones?project=${id}`,
  );
  if (!response.data) {
    throw new Error('Error while fetching milestones, please try again.');
  }
  return response.data.results;
}
