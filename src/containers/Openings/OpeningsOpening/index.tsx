import React, {FC, memo} from 'react';
import {Link, useLocation} from 'react-router-dom';

import './OpeningsOpening.scss';

interface ComponentProps {
  description: string;
  openingId: string;
  position: string;
}

const OpeningsOpening: FC<ComponentProps> = ({description, openingId, position}) => {
  const location = useLocation();

  return (
    <Link className="OpeningsOpening" to={{pathname: `/openings/${openingId}`, state: {from: location.pathname}}}>
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
    </Link>
  );
};

export default memo(OpeningsOpening);
