import React, {FC} from 'react';

import {ProgressBar} from 'components';
import {RoadmapBounty} from 'types/roadmap';
import StatusLabel from '../StatusLabel';

import './TeamRoadmapCard.scss';

type Props = {
  percentage: number;
  title: string;
  bounties: RoadmapBounty[];
};

const TeamRoadmapCard: FC<Props> = ({percentage, bounties, title}) => {
  return (
    <div className="TeamRoadmapCard">
      <div className="TeamRoadmapCard__header">
        <h1 className="TeamRoadmapCard__header-title">{title}</h1>
        <div className="TeamRoadmapCard__header-progress">
          <ProgressBar className="TeamRoadmapCard__header-progress-bar" percentage={percentage} />
          <div className="TeamRoadmapCard__header-progress-percentage">{percentage}% complete</div>
        </div>
      </div>
      <div className="TeamRoadmapCard__content">
        {bounties.map((bounty) => {
          return (
            <div className="TeamRoadmapCard__content-bounty" key={bounty.pk}>
              <h3 className="TeamRoadmapCard__content-bounty-title">{bounty.bounty_title}</h3>
              <h3 className="TeamRoadmapCard__content-bounty-date">
                Expected delivery date: {bounty.estimated_completion_date}
              </h3>
              <StatusLabel isCompleted={bounty.is_complete} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamRoadmapCard;
