import React, {FC, useEffect, useState} from 'react';
import subDays from 'date-fns/subDays';

import * as githubApi from 'apis/github';
import {Container, Loader, PageTitle} from 'components';
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
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [sprintNumber, setSprintNumber] = useState<number | null>(null);

  // milestone states
  const [auditMilestone, setAuditMilestone] = useState<MilestoneState | undefined>(undefined);
  const [backEndMilestone, setBackEndMilestone] = useState<MilestoneState | undefined>(undefined);
  const [blockchainMilestone, setBlockchainMilestone] = useState<MilestoneState | undefined>(undefined);
  const [communityMilestone, setCommunityMilestone] = useState<MilestoneState | undefined>(undefined);
  const [designMilestone, setDesignMilestone] = useState<MilestoneState | undefined>(undefined);
  const [devOpsMilestone, setDevOpsMilestone] = useState<MilestoneState | undefined>(undefined);
  const [frontEndMilestone, setFrontEndMilestone] = useState<MilestoneState | undefined>(undefined);
  const [generalMilestone, setGeneralMilestone] = useState<MilestoneState | undefined>(undefined);
  const [marketingMilestone, setMarketingMilestone] = useState<MilestoneState | undefined>(undefined);

  async function getMilestone(teamName: Exclude<TeamName, 'All'>, setter: (state: MilestoneState) => void) {
    try {
      // get milestones for a team's repositories
      let teamMilestone: MilestoneState | undefined;
      const teamMilestoneDetail = teamMilestoneDetails[teamName];
      const teamMilestonePromises = teamMilestoneDetail.repositoryNames.map(async (repoName) => {
        const milestones = await githubApi.getMilestones(repoName);

        if (milestones.length > 0) {
          // there should only be one milestone per repository at a time, get the latest one if there's multiple
          const lastMilestone = milestones[0];
          const issuesResponse = await githubApi.getIssuesForMilestone(repoName, lastMilestone.number);

          if (teamMilestone) {
            teamMilestone = {issues: {...issuesResponse, ...teamMilestone.issues}, milestone: lastMilestone};
          } else {
            teamMilestone = {issues: issuesResponse, milestone: lastMilestone};
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

  function getFilteredMilestone(milestones: Milestone[], title: string) {
    return milestones.filter((milestone) => milestone.title.toLowerCase().includes(title.toLowerCase()))[0];
  }

  async function setMilestonesFromCommunityRepo() {
    try {
      const teamMilestoneDetail = teamMilestoneDetails.Community;
      const repoName = teamMilestoneDetail.repositoryNames[0]; // assumption: community only has one repo. Change in v2
      const milestones = await githubApi.getMilestones(repoName);
      const audit = getFilteredMilestone(milestones, TeamName.audit);
      const community = getFilteredMilestone(milestones, TeamName.community);
      const general = getFilteredMilestone(milestones, 'Sprint');

      const [auditIssues, communityIssues, generalIssues] = await Promise.all([
        githubApi.getIssuesForMilestone(repoName, audit.number),
        githubApi.getIssuesForMilestone(repoName, community.number),
        githubApi.getIssuesForMilestone(repoName, general.number),
      ]);

      setAuditMilestone({issues: auditIssues, milestone: audit});
      setCommunityMilestone({issues: communityIssues, milestone: community});
      setGeneralMilestone({issues: generalIssues, milestone: general});
    } catch (err) {
      // TBD on how to handle errors since there are so many different milestones
    }
  }

  async function setAllMilestones() {
    setIsLoading(true);
    await Promise.all([
      getMilestone(TeamName.backEnd, (milestone) => setBackEndMilestone(milestone)),
      getMilestone(TeamName.blockchain, (milestone) => setBlockchainMilestone(milestone)),
      getMilestone(TeamName.design, (milestone) => setDesignMilestone(milestone)),
      getMilestone(TeamName.devOps, (milestone) => setDevOpsMilestone(milestone)),
      getMilestone(TeamName.frontEnd, (milestone) => setFrontEndMilestone(milestone)),
      getMilestone(TeamName.marketing, (milestone) => setMarketingMilestone(milestone)),
      setMilestonesFromCommunityRepo(),
    ]);
    setIsLoading(false);
  }

  useEffect(() => {
    setAllMilestones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (generalMilestone) {
      // get weekly sprint duration, which is from [due_on - 7 days, due_on]
      if (generalMilestone.milestone.due_on) {
        const end = new Date(generalMilestone.milestone.due_on);
        const start = subDays(end, 7);
        setEndDate(end);
        setStartDate(start);
      } else {
        setStartDate(null);
        setEndDate(null);
      }

      // get sprint number based on title, the title should be in the format of "Sprint [NO]"
      const sprintNo = generalMilestone.milestone.title.replace(/^\D+/g, '');
      if (sprintNo) {
        setSprintNumber(parseInt(sprintNo, 10));
      } else {
        setSprintNumber(null);
      }
    }
  }, [generalMilestone]);

  if (isLoading) {
    return (
      <div className="Progress__loading-container">
        <Loader />
      </div>
    );
  }

  // general milestone's description will be the goal of overall sprint, if fetching of
  // general milestone failed, display error message
  if (!generalMilestone) {
    return (
      <div className="Progress__error-container">
        Error while fetching milestones from GitHub. Please try again later.
      </div>
    );
  }

  return (
    <>
      <PageTitle ogDescription="Weekly Progress" title="Weekly Progress" />
      <Container className="Progress">
        <ProgressHeader
          goal={generalMilestone.milestone.description}
          startDate={startDate}
          endDate={endDate}
          weekNumber={sprintNumber}
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
      </Container>
    </>
  );
};

export default Progress;
