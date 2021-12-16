import axios from 'axios';
import {PaginatedResponse} from 'types/api';
import {App} from 'types/apps';
import {standardHeaders} from 'utils/requests';

export async function getApps(limit?: number, offset?: number): Promise<App[]> {
  let url = `${process.env.REACT_APP_BACKEND_API}/app_store/apps`;

  if (limit) {
    url += `?limit=${limit}`;
  }
  if (offset) {
    url += `&offset=${offset}`;
  }

  const response = await axios.get<PaginatedResponse<App>>(url, standardHeaders());

  return response.data.results;
}

export async function getAppBySlug(slug: string): Promise<App> {
  const response = await axios.get<App>(
    `${process.env.REACT_APP_BACKEND_API}/app_store/apps/${slug}`,
    standardHeaders(),
  );

  return response.data;
}
