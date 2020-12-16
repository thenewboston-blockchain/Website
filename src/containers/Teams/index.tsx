import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {BreadcrumbMenu, FlatNavLinks, PageTitle} from 'components';
import {TEAMS} from 'constants/teams';
import {TeamMember, TeamName, TeamsUrlParams} from 'types/teams';
import {getTeamMembers} from 'utils/data';

import TeamMemberCard from './TeamMemberCard';
import TeamTabs from './TeamTabs';
import './Teams.scss';

const teamMembers = getTeamMembers();

const Teams: FC = () => {
  const history = useHistory();
  const {team: teamParam, tab: tabParam} = useParams<TeamsUrlParams>();
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers);
  const [teamFilter, setTeamFilter] = useState<TeamName>(TeamName.all);

  const sortTeamMembers = useCallback((members: TeamMember[]): TeamMember[] => {
    const teamLeads = members
      .filter(({isLead}) => isLead)
      .sort((member1, member2) => (member1.displayName > member2.displayName ? 1 : -1));
    const otherMembers = members
      .filter(({isLead}) => !isLead)
      .sort((member1, member2) => (member1.displayName > member2.displayName ? 1 : -1));
    return teamLeads.concat(otherMembers);
  }, []);

  useEffect(() => {
    const team = TEAMS.find(({pathname}) => pathname === teamParam);
    if (team) {
      setTeamFilter(team.title as TeamName);
    } else {
      history.push(`/teams`);
    }
  }, [history, teamParam]);

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
    const members = teamFilter === TeamName.all ? teamMembers : getFilteredMembers();
    const sortedMembers = sortTeamMembers(members);
    setFilteredMembers(sortedMembers);
  }, [sortTeamMembers, teamFilter]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      if (option === TeamName.all) {
        history.push(`/teams/${option}/Members`);
      } else {
        history.push(`/teams/${option}/Overview`);
      }
    },
    [history],
  );

  const renderTeamFilter = (): ReactNode => {
    return <FlatNavLinks handleOptionClick={handleNavOptionClick} options={TEAMS} selectedOption={teamParam} />;
  };

  const renderTeamMembers = useCallback((): ReactNode => {
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
  }, [filteredMembers]);

  const renderTabPanel = useCallback(() => {
    switch (tabParam) {
      case 'Members': {
        return <div className="Teams__team-list">{renderTeamMembers()}</div>;
      }
      default:
        return null;
    }
  }, [renderTeamMembers, tabParam]);

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
          <h1 className="Teams__team-heading">{teamFilter === TeamName.all ? 'All' : teamFilter}</h1>
          {/* {!filteredMembers.length && <EmptyPage />} */}
          <TeamTabs team={teamParam} tab={tabParam} />
          <div className="Teams__tab-panel">{renderTabPanel()}</div>
        </div>
      </div>
    </>
  );
};

export default Teams;
