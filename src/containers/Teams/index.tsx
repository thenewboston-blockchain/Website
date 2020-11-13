import React, {FC, ReactNode, useEffect, useState} from 'react';

import {BreadcrumbMenu, EmptyPage, FlatNavLinks, PageTitle} from 'components';
import {TeamMember, TeamName} from 'types/teams';
import {getTeamMembers} from 'utils/data';

import TeamMemberCard from './TeamMemberCard';
import './Teams.scss';

const teamMembers = getTeamMembers();

const TEAM_NAME_FILTERS = [
  TeamName.all,
  TeamName.backEndDevelopers,
  TeamName.community,
  TeamName.design,
  TeamName.devOps,
  TeamName.discordManagers,
  TeamName.frontEndDevelopers,
  TeamName.kotlinSDK,
  TeamName.marketing,
  TeamName.payments,
  TeamName.qa,
  TeamName.redditModerators,
  TeamName.research,
  TeamName.security,
  TeamName.slackManagers,
  TeamName.youtube,
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
