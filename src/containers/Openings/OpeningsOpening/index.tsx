import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import './OpeningsOpening.scss';

interface ComponentProps {
  description: string;
  openingId: string;
  position: string;
}

const OpeningsOpening: FC<ComponentProps> = ({description, openingId, position}) => {
  return (
    <Link className="OpeningsOpening" to={`/openings/${openingId}`}>
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
    </Link>
  );
};

export default memo(OpeningsOpening);
