import React, {FC, useState, useEffect} from 'react';

import * as githubApi from 'apis/github';
import {BaseIssue, Milestone} from 'types/github';
import {getRepositoryUrlFromMilestoneUrl} from 'utils/github';
import {Loader} from 'components';
import ProgressHeader from './ProgressHeader';
import ProgressDropdownCard from './ProgressDropdownCard';
import './Progress.scss';

type MilestoneState = Array<{
  milestone: Milestone;
  issues: BaseIssue[];
}>;

const Progress: FC = () => {
  const startDate = '4/13';
  const endDate = '4/20';
  const [milestoneState, setMilestoneState] = useState<MilestoneState>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: confirm if the milestones will only be in the Management repo, or in the
    // repository of each team.
    async function getMilestones() {
      const milestoneResponse = await githubApi.getMilestones('Management');
      const milestonePromises = milestoneResponse.data.map(async (milestone) => {
        const issuesResponse = await githubApi.getIssuesForMilestone('Management', milestone.number);
        return {
          issues: issuesResponse.data,
          milestone,
        };
      });
      const milestoneResult = await Promise.all(milestonePromises);
      setMilestoneState(milestoneResult);
      setIsLoading(false);
    }
    getMilestones();
  }, []);

  if (isLoading) {
    return (
      <div className="Progress__loading-container">
        <Loader />
      </div>
    );
  }

  const milestoneUrl = milestoneState[0].milestone.html_url;

  return (
    <div className="Progress">
      <ProgressHeader
        goal={milestoneState[0].milestone.description}
        startDate={startDate}
        endDate={endDate}
        weekNumber={milestoneState[0].milestone.number}
      />
      <ProgressDropdownCard
        name="Audit"
        responsibility="Ensures the accuracy and integrity of all government and team payments."
        issues={milestoneState[0].issues}
        repoPaths={[getRepositoryUrlFromMilestoneUrl(milestoneUrl)]}
      />
      <ProgressDropdownCard
        name="Back-end"
        responsibility="Architect, build, and maintain the backend architecture of TNB."
        issues={milestoneState[0].issues}
        repoPaths={[getRepositoryUrlFromMilestoneUrl(milestoneUrl)]}
      />
      <ProgressDropdownCard
        name="Blockchain"
        responsibility="Build and maintain the blockchain for TNB digital currency network."
        issues={milestoneState[0].issues}
        repoPaths={[getRepositoryUrlFromMilestoneUrl(milestoneUrl)]}
      />
      <ProgressDropdownCard
        name="Community"
        responsibility="Create the strategy, standards and  oversee the overall TNB product."
        issues={milestoneState[0].issues}
        repoPaths={[getRepositoryUrlFromMilestoneUrl(milestoneUrl)]}
      />
    </div>
  );
};

export default Progress;
