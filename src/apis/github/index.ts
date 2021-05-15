import axios from 'axios';

import {BaseIssue, BaseRelease, FetchGithubReleasesParams, Issue, Milestone} from 'types/github';
import {setLocalStorageItem, getLocalStorageItem, saveETagToLocalStorage} from 'utils/browser';
import {githubHeaders, validateGitHubApiStatus} from 'utils/requests';

const BASE_URL = 'https://api.github.com/repos/thenewboston-developers';

export async function getIssuesForRepo(repoPathName: string): Promise<Issue[]> {
  const eTagKey = `${repoPathName}-issues-etag`;
  const cachedContentKey = `${repoPathName}-issues`;
  const eTag = getLocalStorageItem(eTagKey, '');
  const response = await axios.get<Issue[]>(`${BASE_URL}/${repoPathName}/issues`, {
    validateStatus: validateGitHubApiStatus,
    ...githubHeaders(eTag),
  });

  // get cached content if not modified
  if (response.status === 304) {
    return getLocalStorageItem(cachedContentKey, []);
  }
  saveETagToLocalStorage(eTagKey, response.headers.etag);
  setLocalStorageItem(cachedContentKey, JSON.stringify(response.data));
  return response.data;
}

export async function getAccountManagerReleases(params: FetchGithubReleasesParams): Promise<BaseRelease[]> {
  const eTagKey = 'account-manager-releases-etag';
  const cachedContentKey = `account-manager-releases`;
  const eTag = getLocalStorageItem(eTagKey, '');
  const response = await axios.get<BaseRelease[]>(`${BASE_URL}/Account-Manager/releases`, {
    params,
    validateStatus: validateGitHubApiStatus,
    ...githubHeaders(eTag),
  });

  // get cached content if not modified
  if (response.status === 304) {
    return getLocalStorageItem(cachedContentKey, []);
  }
  saveETagToLocalStorage(eTagKey, response.headers.etag);
  setLocalStorageItem(cachedContentKey, JSON.stringify(response.data));
  return response.data;
}

export async function getMilestones(repoPathName: string): Promise<Milestone[]> {
  const eTagKey = `${repoPathName}-milestones-etag`;
  const cachedContentKey = `${repoPathName}-milestones`;
  const eTag = getLocalStorageItem(eTagKey, '');
  const response = await axios.get<Milestone[]>(`${BASE_URL}/${repoPathName}/milestones?state=open`, {
    validateStatus: validateGitHubApiStatus,
    ...githubHeaders(eTag),
  });

  // get cached content if not modified
  if (response.status === 304) {
    return getLocalStorageItem(cachedContentKey, []);
  }
  saveETagToLocalStorage(eTagKey, response.headers.etag);
  setLocalStorageItem(cachedContentKey, JSON.stringify(response.data));
  return response.data;
}

export async function getIssuesForMilestone(repoPathName: string, milestoneNumber: number): Promise<BaseIssue[]> {
  const eTagKey = `${repoPathName}-milestonesIssues-${milestoneNumber}-etag`;
  const cachedContentKey = `${repoPathName}-milestonesIssues-${milestoneNumber}`;
  const eTag = getLocalStorageItem(eTagKey, '');
  const response = await axios.get<BaseIssue[]>(
    `${BASE_URL}/${repoPathName}/issues?milestone=${milestoneNumber}&state=all`,
    {
      validateStatus: validateGitHubApiStatus,
      ...githubHeaders(eTag),
    },
  );

  // get cached content if not modified
  if (response.status === 304) {
    return getLocalStorageItem(cachedContentKey, []);
  }
  saveETagToLocalStorage(eTagKey, response.headers.etag);
  setLocalStorageItem(cachedContentKey, JSON.stringify(response.data));
  return response.data;
}
