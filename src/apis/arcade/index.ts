import axios from 'axios';
import {PaginatedResponse} from 'types/api';
import {App} from 'types/arcade';
import {standardHeaders} from 'utils/requests';

export async function getAllApps(): Promise<App[]> {
  const response = await axios.get<PaginatedResponse<App>>(
    `${process.env.REACT_APP_BACKEND_API}/app_store/apps`,
    standardHeaders(),
  );

  return response.data.results;
}

export async function getAppById(id: string): Promise<App> {
  const response = await axios.get<App>(`${process.env.REACT_APP_BACKEND_API}/app_store/apps/${id}`, standardHeaders());

  return response.data;
}
