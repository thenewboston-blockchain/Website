import React, {FC} from 'react';

import {Container} from 'components';
import {RoadmapTask} from 'types/roadmap';
import {TeamName} from 'types/teams';
import TeamRoadmapCard from '../components/TeamRoadmapCard';

import './TeamRoadmaps.scss';

type Props = {
  teamRoadmaps: {
    teamName: TeamName;
    tasks: RoadmapTask[];
  }[];
};

const TeamRoadmaps: FC<Props> = ({teamRoadmaps}) => {
  return (
    <Container className="TeamRoadmaps">
      {Object.values(teamRoadmaps).map((teamRoadmap) => {
        const totalTasks = teamRoadmap.tasks.length;
        const totalCompletedTasks = teamRoadmap.tasks.filter((task) => task.is_complete).length;
        return (
          <TeamRoadmapCard
            key={teamRoadmap.teamName}
            percentage={Math.floor((totalCompletedTasks / totalTasks) * 100)}
            tasks={teamRoadmap.tasks}
            title={teamRoadmap.teamName}
          />
        );
      })}
    </Container>
  );
};

export default TeamRoadmaps;
