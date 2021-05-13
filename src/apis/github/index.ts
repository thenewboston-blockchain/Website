import axios from 'axios';

import {BaseIssue, BaseRelease, FetchGithubReleasesParams, Issue, Milestone} from 'types/github';

const BASE_URL = 'https://api.github.com/repos/thenewboston-developers';

export async function getIssuesForRepo(repoPathName: string): Promise<Issue[]> {
  const response = await axios.get<Issue[]>(`${BASE_URL}/${repoPathName}/issues`);
  return response.data;
}

export async function getAccountManagerReleases(params: FetchGithubReleasesParams): Promise<BaseRelease[]> {
  const response = await axios.get<BaseRelease[]>(`${BASE_URL}/Account-Manager/releases`, {
    params,
  });
  return response.data;
}

export async function getMilestones(repoPathName: string): Promise<Milestone[]> {
  const response = await axios.get<Milestone[]>(`${BASE_URL}/${repoPathName}/milestones?state=open`);
  return response.data;
}

export async function getIssuesForMilestone(repoPathName: string, milestoneNumber: number): Promise<BaseIssue[]> {
  const response = await axios.get<BaseIssue[]>(
    `${BASE_URL}/${repoPathName}/issues?milestone=${milestoneNumber}&state=all`,
  );
  return response.data;
}
