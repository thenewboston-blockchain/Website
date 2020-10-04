import React, {FC} from 'react';
import {Link, useParams} from 'react-router-dom';

import {OpeningBasicDetails, OpeningCategoryUrlParams} from 'types/openings';

import './OpeningsOpening.scss';

const OpeningsOpening: FC<OpeningBasicDetails> = ({description, position, slug}) => {
  const {category} = useParams<OpeningCategoryUrlParams>();

  return (
    <Link className="OpeningsOpening" to={`${category}/${slug}`}>
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
    </Link>
  );
};

export default OpeningsOpening;
