import React, {FC} from 'react';

import {OpeningBasicDetails} from 'types/openings';

import './OpeningsOpening.scss';

const OpeningsOpening: FC<OpeningBasicDetails> = ({description, position}) => {
  return (
    <div className="OpeningsOpening">
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
    </div>
  );
};

export default OpeningsOpening;
