import axios from 'axios';
import {PaginatedResponse} from 'types/api';
import {RoadmapTask} from 'types/roadmap';
import {standardHeaders} from 'utils/requests';

export async function getAllRoadmaps(): Promise<RoadmapTask[]> {
  const response = await axios.get<PaginatedResponse<RoadmapTask>>(
    `${process.env.REACT_APP_BACKEND_API}/roadmap`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getRoadmapById(id: string): Promise<RoadmapTask> {
  const response = await axios.get<RoadmapTask>(
    `${process.env.REACT_APP_BACKEND_API}/roadmap/${id}`,
    standardHeaders(),
  );

  return response.data;
}

// TODO: to confirm if query based on team_name is possible
export async function getRoadmapByTeamId(id: string): Promise<RoadmapTask[]> {
  const response = await axios.get<PaginatedResponse<RoadmapTask>>(
    `${process.env.REACT_APP_BACKEND_API}/roadmap?team_name=${id}`,
    standardHeaders(),
  );

  return response.data.results;
}
