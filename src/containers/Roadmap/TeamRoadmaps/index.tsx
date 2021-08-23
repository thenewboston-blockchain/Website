import React, {FC} from 'react';

import {Container} from 'components';
import {RoadmapTask} from 'types/roadmap';
import TeamRoadmapCard from '../components/TeamRoadmapCard';

import './TeamRoadmaps.scss';

type Props = {
  teamRoadmaps: {
    [teamName: string]: {
      tasks: RoadmapTask[];
    };
  };
};

const TeamRoadmaps: FC<Props> = ({teamRoadmaps}) => {
  return (
    <Container className="TeamRoadmaps">
      {Object.entries(teamRoadmaps).map(([teamName, teamRoadmap]) => {
        const totalTasks = teamRoadmap.tasks.length;
        const totalCompletedTasks = teamRoadmap.tasks.filter((task) => task.is_complete).length;
        return (
          <TeamRoadmapCard
            key={teamName}
            percentage={Math.floor((totalCompletedTasks / totalTasks) * 100)}
            tasks={teamRoadmap.tasks}
            title={teamName}
          />
        );
      })}
    </Container>
  );
};

export default TeamRoadmaps;
