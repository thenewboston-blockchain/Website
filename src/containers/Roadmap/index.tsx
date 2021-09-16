import React, {FC, useEffect, useState} from 'react';

import {getAllRoadmaps} from 'apis/roadmap';
import {Loader} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {RoadmapBounty} from 'types/roadmap';

import RoadmapHero from './RoadmapHero';
import TeamRoadmaps from './TeamRoadmaps';

import './Roadmap.scss';

type TeamRoadmapState = {
  [teamName: string]: {
    bounties: RoadmapBounty[];
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
        let totalBounties = 0;
        let totalCompletedBounties = 0;
        const roadmapBounties = await getAllRoadmaps();
        const processedTeamRoadmaps = roadmapBounties.reduce((acc, roadmapBounty) => {
          totalBounties += 1;
          if (roadmapBounty.is_complete) {
            totalCompletedBounties += 1;
          }
          const teamName = roadmapBounty.team_name;

          if (acc[teamName]) {
            acc[teamName].bounties.push(roadmapBounty);
          } else {
            acc[teamName] = {
              bounties: [roadmapBounty],
            };
          }
          return acc;
        }, {} as TeamRoadmapState);

        setTeamRoadmaps(processedTeamRoadmaps);
        const averagePercentage = Math.floor((totalCompletedBounties / totalBounties) * 100);
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
