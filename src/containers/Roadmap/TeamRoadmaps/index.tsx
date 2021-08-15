import React, {FC} from 'react';

import {Container} from 'components';
import {RoadmapTask} from 'types/roadmap';
import TeamRoadmapCard from '../components/TeamRoadmapCard';

import './TeamRoadmaps.scss';

const TeamRoadmaps: FC = () => {
  // TODO: Remove sample tasks and call api
  /* eslint-disable sort-keys */
  const sampleTeamTasks: Record<string, RoadmapTask[]> = {
    'Back-end': [
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Back-end',
        task_title: 'Review and implement or delete not implemented unittests',
        estimated_completion_date: '2021-08-15',
        is_complete: false,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Back-end',
        task_title: 'Review and implement or delete not implemented unittests',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Back-end',
        task_title: 'Review and implement or delete not implemented unittests',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
    ],
    'Front-end': [
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Front-end',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Front-end',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Front-end',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Front-end',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Front-end',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: false,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
    ],
    'Dev Ops': [
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Dev Ops',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Dev Ops',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: true,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
      {
        pk: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        team_name: 'Dev Ops',
        task_title: 'Add Analytics Page onto the Website',
        estimated_completion_date: '2021-08-15',
        is_complete: false,
        created_date: '2021-08-15T07:01:34.130Z',
        modified_date: '2021-08-15T07:01:34.130Z',
      },
    ],
  };
  return (
    <Container className="TeamRoadmaps">
      {Object.entries(sampleTeamTasks).map(([teamTitle, teamTasks]) => {
        return <TeamRoadmapCard key={teamTitle} percentage={50} tasks={teamTasks} title={teamTitle} />;
      })}
    </Container>
  );
};

export default TeamRoadmaps;
