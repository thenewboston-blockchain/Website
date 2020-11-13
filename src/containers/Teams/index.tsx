import React, {FC, ReactNode, useEffect, useState} from 'react';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, PageTitle} from 'components';
import {TeamMember, TeamName} from 'types/teams';
import {getTeamMembers} from 'utils/data';

import TeamMemberCard from './TeamMemberCard';
import './Teams.scss';

const teamMembers = getTeamMembers();

const TEAM_NAME_FILTERS = [
  {title: 'All', url: TeamName.all},
  {title: 'Back-End Developers', url: TeamName.backEndDevelopers},
  {title: 'Community', url: TeamName.community},
  {title: 'Design', url: TeamName.design},
  {title: 'DevOps', url: TeamName.devOps},
  {title: 'Discord Managers', url: TeamName.discordManagers},
  {title: 'Front-End Developers', url: TeamName.frontEndDevelopers},
  {title: 'Kotlin SDK', url: TeamName.kotlinSDK},
  {title: 'Marketing', url: TeamName.marketing},
  {title: 'Payments', url: TeamName.payments},
  {title: 'QA', url: TeamName.qa},
  {title: 'Reddit Moderators', url: TeamName.redditModerators},
  {title: 'Research', url: TeamName.research},
  {title: 'Security', url: TeamName.security},
  {title: 'Slack Manager', url: TeamName.slackManagers},
  {title: 'TouTube', url: TeamName.youtube},
];
const Teams: FC = () => {
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers);
  const [teamFilter, setTeamFilter] = useState<TeamName>(TeamName.all);

  useEffect(() => {
    const getFilteredMembers = (): TeamMember[] => {
      const teamLeads: TeamMember[] = [];
      const otherMembers: TeamMember[] = [];
      teamMembers.forEach((member) => {
        const {teams} = member;
        const matchingTeam = teams.find(({title}) => title.toLowerCase() === teamFilter.toLowerCase());
        if (matchingTeam) {
          if (matchingTeam.isLead) {
            teamLeads.push({...member, isLead: true});
          } else {
            otherMembers.push({...member, isLead: false});
          }
        }
      });
      return teamLeads.concat(otherMembers);
    };

    setFilteredMembers(teamFilter === TeamName.all ? teamMembers : getFilteredMembers());
  }, [teamFilter]);

  const handleNavOptionClick = (option: TeamName) => (): void => {
    setTeamFilter(option);
  };

  const renderTeamFilter = (): ReactNode => {
    return (
      <FlatNavLinks<TeamName>
        handleOptionClick={handleNavOptionClick}
        options={TEAM_NAME_FILTERS}
        selectedOption={teamFilter}
      />
    );
  };

  const renderTeamMembers = (): ReactNode => {
    return filteredMembers.map(
      ({contributorId, displayName, githubUsername, isLead, payPerDay, profileImage, slackUsername, titles}) => (
        <TeamMemberCard
          displayName={displayName}
          githubUsername={githubUsername}
          isLead={isLead}
          key={contributorId}
          payPerDay={payPerDay}
          profileImage={profileImage}
          slackUsername={slackUsername}
          titles={titles}
        />
      ),
    );
  };

  return (
    <>
      <PageTitle title="Teams" />
      <div className="Teams">
        <BreadcrumbMenu
          className="Teams__BreadcrumbMenu"
          menuItems={renderTeamFilter()}
          pageName={teamFilter}
          sectionName="Team"
        />
        <div className="Teams__left-menu">{renderTeamFilter()}</div>
        <div className="Teams__right-list">
          <h1 className="Teams__team-heading">{teamFilter === TeamName.all ? 'All Contributors' : teamFilter}</h1>
          {!filteredMembers.length && <EmptyPage />}
          <div className="Teams__team-list">{renderTeamMembers()}</div>
        </div>
      </div>
    </>
  );
};

export default Teams;
