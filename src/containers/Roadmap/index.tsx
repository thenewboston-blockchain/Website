import React, {FC, useEffect, useState} from 'react';

import {getRoadmapByTeamName} from 'apis/roadmap';
import {Loader} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {RoadmapTask} from 'types/roadmap';
import {TeamName} from 'types/teams';

import {ROADMAP_TEAM_NAMES} from './constants';
import RoadmapHero from './RoadmapHero';
import TeamRoadmaps from './TeamRoadmaps';

import './Roadmap.scss';

type TeamRoadmapState = {
  teamName: TeamName;
  tasks: RoadmapTask[];
}[];

const Roadmap: FC = () => {
  const [teamRoadmaps, setTeamRoadmaps] = useState<TeamRoadmapState>([]);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  useEffect(() => {
    setProgress(ApiProgress.Requesting);
    let totalTasks = 0;
    let totalCompletedTasks = 0;

    const getAllRoadmaps = async () => {
      const roadmapTasksPromises = ROADMAP_TEAM_NAMES.map(async (teamName) => {
        const roadmapTasks = await getRoadmapByTeamName(teamName);
        return {tasks: roadmapTasks, teamName};
      });

      return Promise.all(roadmapTasksPromises);
    };

    getAllRoadmaps().then((roadmapTasks) => {
      const teamRoadmapTasks = roadmapTasks.reduce((acc, roadmapTask) => {
        if (roadmapTask.tasks && roadmapTask.tasks.length > 0) {
          totalTasks += roadmapTask.tasks.length;
          totalCompletedTasks += roadmapTask.tasks.filter((task) => task.is_complete).length;
          return [...acc, roadmapTask];
        }
        return acc;
      }, [] as TeamRoadmapState);

      setTeamRoadmaps(teamRoadmapTasks);
      const averagePercentage = Math.floor((totalCompletedTasks / totalTasks) * 100);
      setProgressPercentage(averagePercentage);
      setProgress(ApiProgress.Success);
    });
  }, []);

  if (progress === ApiProgress.Requesting || progress === ApiProgress.Init || !teamRoadmaps) {
    return <Loader className="Roadmap__loader" />;
  }

  return (
    <div className="Roadmap">
      <RoadmapHero className="Roadmap__hero" progressPercentage={progressPercentage} />
      <TeamRoadmaps teamRoadmaps={teamRoadmaps} />
    </div>
  );
};

export default Roadmap;
