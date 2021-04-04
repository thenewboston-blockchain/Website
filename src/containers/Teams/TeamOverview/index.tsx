import React, {FC, ReactNode, useCallback} from 'react';
import {Icon, IconType} from '@thenewboston/ui';
import {A, DocList} from 'components';
import {CoreTeam} from 'types/teams';

import './TeamOverview.scss';

interface ComponentProps {
  team: CoreTeam;
}

const TeamOverview: FC<ComponentProps> = ({team}) => {
  const renderTeamDescription = useCallback((): ReactNode => {
    return (
      <>
        <h4 className="TeamOverview__sub-heading"> About the team </h4>
        <p className="TeamOverview__description">{team.about}</p>
        <div className="TeamOverview__social">
          <Icon className="TeamOverview__social-icon" icon={IconType.github} size={18} />
          <A className="TeamOverview__social-title" href={team.github}>
            {team.github}
          </A>
        </div>
        <div className="TeamOverview__social">
          <Icon className="TeamOverview__social-icon" icon={IconType.discord} size={18} />
          <p className="TeamOverview__social-title TeamOverview__social-title--sail-gray"> #{team.slack} </p>
        </div>
      </>
    );
  }, [team]);

  const renderTeamResponsibilities = useCallback((): ReactNode => {
    return (
      <>
        <h4 className="TeamOverview__sub-heading"> Role and Responsibilities </h4>
        <DocList className="TeamOverview__responsibilities-item" variant="ul">
          {team.responsibilities && <li>{team.responsibilities}</li>}
        </DocList>
      </>
    );
  }, [team]);

  return (
    <div className="TeamOverview">
      <div className="TeamOverview__about">{renderTeamDescription()}</div>
      <div className="TeamOverview__responsibilities">{renderTeamResponsibilities()}</div>
    </div>
  );
};

export default TeamOverview;
