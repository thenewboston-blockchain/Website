import axios from 'axios';

import {BaseRelease, FetchGithubReleasesParams} from 'types/github';

export async function getIssuesForRepo(repoPathName: string) {
  return axios.get(`https://api.github.com/repos/thenewboston-developers/${repoPathName}/issues`);
}

export async function getAccountManagerReleases(params: FetchGithubReleasesParams) {
  return axios.get<BaseRelease[]>('https://api.github.com/repos/thenewboston-developers/Account-Manager/releases', {
    params,
  });
}
