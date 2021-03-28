import React, {FC} from 'react';

import {DocContainer} from 'components';

const ProjectsOverview: FC = () => {
  return (
    <DocContainer className="ProjectsOverview" title="Overview">
      <p>
        Contributors can earn coins by working on apps, games, tools, and other software for thenewboston network. To
        receive funding, project proposals will be submitted to thenewboston team who will review the details of the
        proposal to ensure that all rules and guidelines are met. Once approved, coins will be rewarded as milestones
        are completed throughout the development process.
      </p>
      <p>
        These projects will improve our network through the continuous creation of new apps, games, and tools while also
        allowing for a more widespread distribution of coins to many contributors.
      </p>
    </DocContainer>
  );
};

export default ProjectsOverview;
