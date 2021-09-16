import axios from 'axios';
import {PaginatedResponse} from 'types/api';
import {RoadmapBounty} from 'types/roadmap';
import {standardHeaders} from 'utils/requests';

export async function getAllRoadmaps(): Promise<RoadmapBounty[]> {
  const response = await axios.get<PaginatedResponse<RoadmapBounty>>(
    `${process.env.REACT_APP_BACKEND_API}/roadmaps`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getRoadmapByTeamName(teamName: string): Promise<RoadmapBounty[]> {
  const response = await axios.get<PaginatedResponse<RoadmapBounty>>(
    `${process.env.REACT_APP_BACKEND_API}/roadmaps?team=${teamName}`,
    standardHeaders(),
  );

  return response.data.results;
}
