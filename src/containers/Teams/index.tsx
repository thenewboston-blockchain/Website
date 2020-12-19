import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {A, BreadcrumbMenu, DocList, FlatNavLinks, Icon, IconType, PageTitle} from 'components';
import {TEAMS} from 'constants/teams';
import {TeamMember, TeamName, TeamPlatform, TeamResponsibility, TeamsUrlParams} from 'types/teams';
import {getTeamData, getTeamMembers} from 'utils/data';

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

  const renderTeamDescription = useCallback((description: string, platforms: TeamPlatform[]): ReactNode => {
    return (
      <>
        <h4 className="Teams__team-overview-sub-heading"> About the team </h4>
        <p className="Teams__team-description">{description}</p>
        {platforms.map(({name, label, link}) => (
          <div className="Teams__team-social">
            <Icon
              className="Teams__team-social-icon"
              icon={name === 'github' ? IconType.github : IconType.slack}
              size={18}
            />
            {name === 'github' ? (
              <A className="Teams__team-social-title" href={link}>
                {label}
              </A>
            ) : (
              <p className="Teams__team-social-title Teams__team-social-title--sail-gray"> #{label} </p>
            )}
          </div>
        ))}
      </>
    );
  }, []);

  const renderTeamResponsibilities = useCallback((responsibilities: TeamResponsibility[]): ReactNode => {
    return (
      <>
        <h4 className="Teams__team-overview-sub-heading"> Role and Responsibilities </h4>
        <DocList className="Teams__team-responsibilities-item" variant="ul">
          {responsibilities.map(({item, subitems}) => (
            <>
              <li> {item} </li>
              <ul>
                {subitems.map((subitem) => (
                  <li>{subitem}</li>
                ))}
              </ul>
            </>
          ))}
        </DocList>
      </>
    );
  }, []);

  const renderTeamOverview = useCallback((): ReactNode => {
    const {description, platforms, responsibilities} = getTeamData(teamFilter);
    return (
      <>
        <div className="Teams__team-about">{renderTeamDescription(description, platforms)}</div>
        <div className="Teams__team-responsibilities">{renderTeamResponsibilities(responsibilities)}</div>
      </>
    );
  }, [teamFilter, renderTeamDescription, renderTeamResponsibilities]);

  const renderTabPanel = useCallback(() => {
    switch (tabParam) {
      case 'Members': {
        return <div className="Teams__team-list">{renderTeamMembers()}</div>;
      }
      case 'Overview': {
        return <div className="Teams__team-overview">{renderTeamOverview()}</div>;
      }
      default:
        return null;
    }
  }, [renderTeamMembers, renderTeamOverview, tabParam]);

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
        <aside className="Teams__left-menu">{renderTeamFilter()}</aside>
        <section className="Teams__right-section">
          <h1 className="Teams__team-heading">{teamFilter === TeamName.all ? 'All' : teamFilter}</h1>
          {/* {!filteredMembers.length && <EmptyPage />} */}
          <TeamTabs team={teamParam} tab={tabParam} />
          <div className="Teams__tab-panel">{renderTabPanel()}</div>
        </section>
      </div>
    </>
  );
};

export default Teams;
