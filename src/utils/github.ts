import axios from 'axios';

import {REPOSITORIES} from 'constants/github';
import {Issue} from 'types/github';

export const fetchGithubIssues = async (): Promise<Issue[]> => {
  const promises = REPOSITORIES.map((repoName) =>
    axios.get(`https://api.github.com/repos/thenewboston-developers/${repoName}/issues`),
  );
  const results = await Promise.all(promises);
  // const issues = results.reduce((acc: Issue[], {data}) => [...acc, ...data], []);
  return results.reduce((acc: Issue[], {data}) => [...acc, ...data.filter(({pull_request}: any) => !pull_request)], []);
};
