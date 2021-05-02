import React, {FC, useState, useEffect} from 'react';

import * as githubApi from 'apis/github';
import {Loader} from 'components';
import {format} from 'fecha';
import {BaseIssue, Milestone} from 'types/github';
import {TeamName} from 'types/teams';
import {teamMilestoneDetails} from './constants';
import ProgressHeader from './ProgressHeader';
import ProgressDropdownCard from './ProgressDropdownCard';
import './Progress.scss';

type MilestoneState = {
  milestone: Milestone;
  issues: BaseIssue[];
};

const Progress: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // milestone states
  const [auditMilestone, setAuditMilestone] = useState<MilestoneState | undefined>(undefined);
  const [backEndMilestone, setBackEndMilestone] = useState<MilestoneState | undefined>(undefined);
  const [blockchainMilestone, setBlockchainMilestone] = useState<MilestoneState | undefined>(undefined);
  const [communityMilestone, setCommunityMilestone] = useState<MilestoneState | undefined>(undefined);
  const [designMilestone, setDesignMilestone] = useState<MilestoneState | undefined>(undefined);
  const [devOpsMilestone, setDevOpsMilestone] = useState<MilestoneState | undefined>(undefined);
  const [frontEndMilestone, setFrontEndMilestone] = useState<MilestoneState | undefined>(undefined);
  const [marketingMilestone, setMarketingMilestone] = useState<MilestoneState | undefined>(undefined);

  async function getMilestone(teamName: Exclude<TeamName, 'All'>, setter: (state: MilestoneState) => void) {
    try {
      // get milestones for a team's repositories
      let teamMilestone: MilestoneState | undefined;
      const teamMilestoneDetail = teamMilestoneDetails[teamName];
      const teamMilestonePromises = teamMilestoneDetail.repositoryNames.map(async (repoName) => {
        const milestoneResponse = await githubApi.getMilestones(repoName);
        const milestone = milestoneResponse.data;

        if (milestone.length > 0) {
          // there should only be one milestone per repository at a time, get the latest one if there's multiple
          const lastMilestone = milestone[0];
          const issuesResponse = await githubApi.getIssuesForMilestone(repoName, lastMilestone.number);

          if (teamMilestone) {
            teamMilestone = {issues: {...issuesResponse.data, ...teamMilestone.issues}, milestone: lastMilestone};
          } else {
            teamMilestone = {issues: issuesResponse.data, milestone: lastMilestone};
          }
        }
      });
      await Promise.all(teamMilestonePromises);

      if (teamMilestone) {
        setter(teamMilestone);
      }
    } catch (err) {
      // TBD on how to handle errors since there are so many different milestones
    }
  }

  async function setAllMilestones() {
    setIsLoading(true);
    await Promise.all([
      getMilestone(TeamName.audit, (milestone) => setAuditMilestone(milestone)),
      getMilestone(TeamName.backEnd, (milestone) => setBackEndMilestone(milestone)),
      getMilestone(TeamName.blockchain, (milestone) => setBlockchainMilestone(milestone)),
      getMilestone(TeamName.community, (milestone) => setCommunityMilestone(milestone)),
      getMilestone(TeamName.design, (milestone) => setDesignMilestone(milestone)),
      getMilestone(TeamName.devOps, (milestone) => setDevOpsMilestone(milestone)),
      getMilestone(TeamName.frontEnd, (milestone) => setFrontEndMilestone(milestone)),
      getMilestone(TeamName.marketing, (milestone) => setMarketingMilestone(milestone)),
    ]);
    setIsLoading(false);
  }

  useEffect(() => {
    setAllMilestones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // start date and end date will be from created date to due date
    if (communityMilestone) {
      setStartDate(format(new Date(communityMilestone.milestone.created_at), 'MM/DD'));

      if (communityMilestone.milestone.due_on) {
        setEndDate(format(new Date(communityMilestone.milestone.due_on), 'MM/DD'));
      } else {
        setEndDate('N.A.');
      }
    }
  }, [communityMilestone]);

  if (isLoading) {
    return (
      <div className="Progress__loading-container">
        <Loader />
      </div>
    );
  }

  // community's milestone's description will be the goal of overall sprint, if fetching of
  // community milestone failed, display error message
  if (!communityMilestone) {
    return (
      <div className="Progress__error-container">
        Error while fetching milestones from GitHub. Please try again later.
      </div>
    );
  }

  return (
    <div className="Progress">
      <ProgressHeader
        goal={communityMilestone.milestone.description}
        startDate={startDate}
        endDate={endDate}
        weekNumber={communityMilestone.milestone.number}
      />
      {auditMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.audit].teamName}
          responsibility={teamMilestoneDetails[TeamName.audit].responsibility}
          issues={auditMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.audit].repositoryNames}
        />
      )}
      {backEndMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.backEnd].teamName}
          responsibility={teamMilestoneDetails[TeamName.backEnd].responsibility}
          issues={backEndMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.backEnd].repositoryNames}
        />
      )}
      {blockchainMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.blockchain].teamName}
          responsibility={teamMilestoneDetails[TeamName.blockchain].responsibility}
          issues={blockchainMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.blockchain].repositoryNames}
        />
      )}
      {communityMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.community].teamName}
          responsibility={teamMilestoneDetails[TeamName.community].responsibility}
          issues={communityMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.community].repositoryNames}
        />
      )}
      {designMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.design].teamName}
          responsibility={teamMilestoneDetails[TeamName.design].responsibility}
          issues={designMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.design].repositoryNames}
        />
      )}
      {devOpsMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.devOps].teamName}
          responsibility={teamMilestoneDetails[TeamName.devOps].responsibility}
          issues={devOpsMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.devOps].repositoryNames}
        />
      )}
      {frontEndMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.frontEnd].teamName}
          responsibility={teamMilestoneDetails[TeamName.frontEnd].responsibility}
          issues={frontEndMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.frontEnd].repositoryNames}
        />
      )}
      {marketingMilestone && (
        <ProgressDropdownCard
          name={teamMilestoneDetails[TeamName.marketing].teamName}
          responsibility={teamMilestoneDetails[TeamName.marketing].responsibility}
          issues={marketingMilestone.issues}
          repoNames={teamMilestoneDetails[TeamName.marketing].repositoryNames}
        />
      )}
    </div>
  );
};

export default Progress;
