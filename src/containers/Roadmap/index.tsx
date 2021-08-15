import React, {FC, useEffect, useState} from 'react';

import {getAllRoadmaps} from 'apis/roadmap';
import {Loader} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {RoadmapTask} from 'types/roadmap';

import RoadmapHero from './RoadmapHero';
import TeamRoadmaps from './TeamRoadmaps';

import './Roadmap.scss';

const Roadmap: FC = () => {
  // TODO: Call api when ready
  // const [teamRoadmaps, setTeamRoadmaps] = useState<RoadmapTask[]>([]);
  // const [progressPercentage, setProgressPercentage] = useState(0);
  // const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  // useEffect(() => {
  //   setProgress(ApiProgress.Requesting);
  //   getAllRoadmaps()
  //     .then((response) => {
  //       setTeamRoadmaps(response);

  //       // calculate average percentage for progress
  //       // response.reduce((acc, roadmap) => {
  //       //   return acc + roadmap.is_complete;
  //       // }, 0);

  //       setProgress(ApiProgress.Success);
  //     })
  //     .catch(() => {
  //       setProgress(ApiProgress.Error);
  //     });
  // }, []);

  // if (progress === ApiProgress.Requesting || progress === ApiProgress.Init) {
  //   return <Loader />;
  // }

  return (
    <div className="Roadmap">
      <RoadmapHero className="Roadmap__hero" progressPercentage={50} />
      <TeamRoadmaps />
    </div>
  );
};

export default Roadmap;
