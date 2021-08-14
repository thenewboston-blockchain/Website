import {BaseIssue, BaseRelease, FetchGithubReleasesParams, Issue, Milestone} from 'types/github';
import {githubGetRequestAbstract} from 'utils/requests';

const BASE_URL = 'https://api.github.com/repos/thenewboston-developers';

export async function getIssuesForRepo(repoPathName: string): Promise<Issue[]> {
  return githubGetRequestAbstract<Issue[]>({
    cachedContentKey: `${repoPathName}-issues`,
    eTagKey: `${repoPathName}-issues-etag`,
    url: `${BASE_URL}/${repoPathName}/issues`,
  });
}

export async function getAccountManagerReleases(params: FetchGithubReleasesParams): Promise<BaseRelease[]> {
  return githubGetRequestAbstract<BaseRelease[]>({
    cachedContentKey: `account-manager-releases`,
    eTagKey: 'account-manager-releases-etag',
    params,
    url: `${BASE_URL}/Account-Manager/releases`,
  });
}

export async function getMilestones(repoPathName: string): Promise<Milestone[]> {
  return githubGetRequestAbstract<Milestone[]>({
    cachedContentKey: `${repoPathName}-milestones`,
    eTagKey: `${repoPathName}-milestones-etag`,
    url: `${BASE_URL}/${repoPathName}/milestones?state=open`,
  });
}

export async function getIssuesForMilestone(repoPathName: string, milestoneNumber: number): Promise<BaseIssue[]> {
  return githubGetRequestAbstract<BaseIssue[]>({
    cachedContentKey: `${repoPathName}-milestonesIssues-${milestoneNumber}`,
    eTagKey: `${repoPathName}-milestonesIssues-${milestoneNumber}-etag`,
    url: `${BASE_URL}/${repoPathName}/issues?milestone=${milestoneNumber}&state=all`,
  });
}
