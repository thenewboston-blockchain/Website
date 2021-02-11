import React, {FC, memo, useCallback} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {OpeningCategory} from 'types/openings';

import './OpeningsOpening.scss';

interface ComponentProps {
  category: OpeningCategory;
  description: string;
  openingId: string;
  position: string;
  projectName?: string;
}

const OpeningsOpening: FC<ComponentProps> = ({category, description, openingId, position, projectName}) => {
  const location = useLocation();

  const renderOpeningTitle = useCallback(() => {
    if (projectName) {
      return (
        <>
          {position} <span>({projectName})</span>
        </>
      );
    }
    return position;
  }, [position, projectName]);

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
