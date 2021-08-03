import axios from 'axios';

import {AnalyticsCategory} from 'types/analytics';
import {PaginatedResponse} from 'types/api';

export async function getAnalyticsCategories(): Promise<AnalyticsCategory[]> {
  const response = await axios.get<PaginatedResponse<AnalyticsCategory>>(
    `${process.env.REACT_APP_BACKEND_API}/analytics_categories`,
  );

  if (!response.data) {
    throw new Error('Error while fetching analytics categories data, please try again.');
  }
  return response.data.results;
}
