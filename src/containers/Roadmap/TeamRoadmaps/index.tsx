import React, {FC} from 'react';

import {Container} from 'components';
import {RoadmapBounty} from 'types/roadmap';
import TeamRoadmapCard from '../components/TeamRoadmapCard';

import './TeamRoadmaps.scss';

type Props = {
  teamRoadmaps: {
    [teamName: string]: {
      bounties: RoadmapBounty[];
    };
  };
};

const TeamRoadmaps: FC<Props> = ({teamRoadmaps}) => {
  return (
    <Container className="TeamRoadmaps">
      {Object.entries(teamRoadmaps).map(([teamName, teamRoadmap]) => {
        const totalBounties = teamRoadmap.bounties.length;
        const totalCompletedBounties = teamRoadmap.bounties.filter((bounty) => bounty.is_complete).length;
        return (
          <TeamRoadmapCard
            key={teamName}
            percentage={Math.floor((totalCompletedBounties / totalBounties) * 100)}
            bounties={teamRoadmap.bounties}
            title={teamName}
          />
        );
      })}
    </Container>
  );
};

export default TeamRoadmaps;
