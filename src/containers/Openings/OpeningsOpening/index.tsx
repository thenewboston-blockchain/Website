import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {OpeningBasicDetails} from 'types/openings';

import './OpeningsOpening.scss';

const OpeningsOpening: FC<OpeningBasicDetails> = ({categories, description, position, slug}) => {
  return (
    <Link className="OpeningsOpening" to={`${categories[0]}/${slug}`}>
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
    </Link>
  );
};

export default OpeningsOpening;
