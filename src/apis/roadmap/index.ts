import axios from 'axios';
import {PaginatedResponse} from 'types/api';
import {RoadmapTask} from 'types/roadmap';
import {standardHeaders} from 'utils/requests';

export async function getAllRoadmaps(): Promise<RoadmapTask[]> {
  const response = await axios.get<PaginatedResponse<RoadmapTask>>(
    `${process.env.REACT_APP_BACKEND_API}/roadmaps`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getRoadmapByTeamName(teamName: string): Promise<RoadmapTask[]> {
  const response = await axios.get<PaginatedResponse<RoadmapTask>>(
    `${process.env.REACT_APP_BACKEND_API}/roadmaps?team=${teamName}`,
    standardHeaders(),
  );

  return response.data.results;
}
