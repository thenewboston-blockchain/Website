import React, {FC, useEffect, useState} from 'react';

import {getAllRoadmaps} from 'apis/roadmap';
import {Loader} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {RoadmapTask} from 'types/roadmap';

import RoadmapHero from './RoadmapHero';
import TeamRoadmaps from './TeamRoadmaps';

import './Roadmap.scss';

type TeamRoadmapState = {
  [teamName: string]: {
    tasks: RoadmapTask[];
  };
};

const Roadmap: FC = () => {
  const [teamRoadmaps, setTeamRoadmaps] = useState<TeamRoadmapState>({});
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  useEffect(() => {
    (async () => {
      try {
        setProgress(ApiProgress.Requesting);
        let totalTasks = 0;
        let totalCompletedTasks = 0;
        const roadmapTasks = await getAllRoadmaps();
        const processedTeamRoadmaps = roadmapTasks.reduce((acc, roadmapTask) => {
          totalTasks += 1;
          if (roadmapTask.is_complete) {
            totalCompletedTasks += 1;
          }
          const teamName = roadmapTask.team_name;

          if (acc[teamName]) {
            acc[teamName].tasks.push(roadmapTask);
          } else {
            acc[teamName] = {
              tasks: [roadmapTask],
            };
          }
          return acc;
        }, {} as TeamRoadmapState);

        setTeamRoadmaps(processedTeamRoadmaps);
        const averagePercentage = Math.floor((totalCompletedTasks / totalTasks) * 100);
        setProgressPercentage(averagePercentage);
        setProgress(ApiProgress.Success);
      } catch (err) {
        setProgress(ApiProgress.Error);
      }
    })();
  }, []);

  if (progress === ApiProgress.Error) {
    return <div className="Roadmap__error">Error while fetching roadmap. Please try again later.</div>;
  }

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
