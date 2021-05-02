import axios from 'axios';

import {BaseRelease, FetchGithubReleasesParams, Milestone, BaseIssue} from 'types/github';

export async function getIssuesForRepo(repoPathName: string) {
  return axios.get(`https://api.github.com/repos/thenewboston-developers/${repoPathName}/issues`);
}

export async function getAccountManagerReleases(params: FetchGithubReleasesParams) {
  return axios.get<BaseRelease[]>('https://api.github.com/repos/thenewboston-developers/Account-Manager/releases', {
    params,
  });
}

export async function getMilestones(repoPathName: string) {
  return axios.get<Milestone[]>(
    `https://api.github.com/repos/thenewboston-developers/${repoPathName}/milestones?state=open`,
  );
}

export async function getIssuesForMilestone(repoPathName: string, milestoneNumber: number) {
  return axios.get<BaseIssue[]>(
    `https://api.github.com/repos/thenewboston-developers/${repoPathName}/issues?milestone=${milestoneNumber}&state=all`,
  );
}
