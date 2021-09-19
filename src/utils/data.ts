import parse from 'date-fns/parse';
import {RawBounty, Bounty, BountyDict} from 'types/github';
import {Opening} from 'types/openings';

import openings from 'data/openings.json';
import bounties from 'data/tasks.json';

export const getOpenings = (): Opening[] => {
  return openings as Opening[];
};

export const getBounties = (): BountyDict => {
  const results: any = {};

  Object.entries(bounties).forEach(([githubUsername, bountyList]) => {
    results[githubUsername] = (bountyList as RawBounty[]).map(
      (bounty: RawBounty): Bounty => ({
        ...bounty,
        completed_date: parse(bounty.completed_date, 'L/d/yy', new Date()),
      }),
    );
  });

  return results;
};
