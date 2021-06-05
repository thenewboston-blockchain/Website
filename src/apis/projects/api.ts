import axios from 'axios';

import {PaginatedResponse} from 'types/api';
import {Project} from 'types/projects';

export async function getProjects(): Promise<Project[]> {
  const response = await axios.get<PaginatedResponse<Project>>(`${process.env.REACT_APP_BACKEND_API}/projects`);

  if (!response.data) {
    throw new Error('Error while fetching projects, please try again.');
  }
  return response.data.results;
}
