import axios from 'axios';

import {PaginatedResponse} from 'types/api';
import {Opening} from 'types/openings';

export async function getOpenings(): Promise<Opening[]> {
  const response = await axios.get<PaginatedResponse<Opening>>(`${process.env.REACT_APP_BACKEND_API}/openings`);

  if (!response.data) {
    throw new Error('Error while fetching openings, please try again.');
  }
  return response.data.results;
}
