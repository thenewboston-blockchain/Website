import React, {FC, memo, useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {OpeningCategory, ProjectProposal} from 'types/openings';

import './OpeningsOpening.scss';

interface ComponentProps {
  category: OpeningCategory;
  description: string;
  openingId: string;
  position: string;
  project?: ProjectProposal;
}

const OpeningsOpening: FC<ComponentProps> = ({category, description, openingId, position, project}) => {
  const location = useLocation();

  const renderOpeningTitle = useCallback(() => {
    if (project) {
      return (
        <>
          {position} <span className="OpeningsOpening__project">({project.name})</span>
        </>
      );
    }
    return position;
  }, [position, project]);

  return (
    <Link
      className="OpeningsOpening"
      to={{pathname: `/openings/${category}/${openingId}`, state: {from: location.pathname}}}
    >
      <div className="OpeningsOpening__position">{renderOpeningTitle()}</div>
      <div className="OpeningsOpening__description">{description}</div>
    </Link>
  );
};

export default memo(OpeningsOpening);
