import React, {FC, Fragment, ReactNode, useCallback} from 'react';
import {A, DocList, Icon, IconType} from 'components';
import {TeamName} from 'types/teams';
import {getTeamData} from 'utils/data';

import './TeamOverview.scss';

interface ComponentProps {
  teamFilter: TeamName;
}

const TeamOverview: FC<ComponentProps> = ({teamFilter}) => {
  const {description, platforms, responsibilities} = getTeamData(teamFilter);

  const renderTeamDescription = useCallback((): ReactNode => {
    return (
      <>
        <h4 className="TeamOverview__sub-heading"> About the team </h4>
        <p className="TeamOverview__description">{description}</p>
        {platforms.map(({name, label, link}) => (
          <div className="TeamOverview__social" key={`${name}-${label}`}>
            <Icon
              className="TeamOverview__social-icon"
              icon={name === 'github' ? IconType.github : IconType.slack}
              size={18}
            />
            {name === 'github' ? (
              <A className="TeamOverview__social-title" href={link}>
                {label}
              </A>
            ) : (
              <p className="TeamOverview__social-title TeamOverview__social-title--sail-gray"> #{label} </p>
            )}
          </div>
        ))}
      </>
    );
  }, [description, platforms]);

  const renderTeamResponsibilities = useCallback((): ReactNode => {
    return (
      <>
        <h4 className="TeamOverview__sub-heading"> Role and Responsibilities </h4>
        <DocList className="TeamOverview__responsibilities-item" variant="ul">
          {responsibilities.map(({item, subitems}, i) => (
            <Fragment key={i}>
              <li> {item} </li>
              <ul>
                {subitems.map((subitem, index) => (
                  <li key={index}>{subitem}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </DocList>
      </>
    );
  }, [responsibilities]);

  return (
    <div className="TeamOverview">
      <div className="TeamOverview__about">{renderTeamDescription()}</div>
      <div className="TeamOverview__responsibilities">{renderTeamResponsibilities()}</div>
    </div>
  );
};

export default TeamOverview;
