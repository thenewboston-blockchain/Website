import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';

import {Button} from 'components';
import ProjectsHeroImage from './ProjectsHeroImage';
import './ProjectsHero.scss';

const ProjectsHero: FC = () => {
  const history = useHistory();

  return (
    <div className="ProjectsHero">
      <div className="ProjectsHero__wrapper">
        <div className="ProjectsHero__left">
          <div className="ProjectsHero__left-content-container">
            <h1 className="ProjectsHero__title">Projects</h1>
            <h2 className="ProjectsHero__subtitle">
              Earn coins by building apps, games, tools, and other software for thenewboston network.
            </h2>
            <div className="ProjectsHero__cta-container">
              <Button
                className="ProjectsHero__first-button"
                onClick={() =>
                  window.open(
                    'https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT',
                    '_blank',
                  )
                }
                variant="contained"
              >
                Propose a Project
              </Button>
              <Button onClick={() => history.push('/project-rules/overview')} variant="outlined">
                Rules and Guide
              </Button>
            </div>
          </div>
        </div>
        <div className="ProjectsHero__right">
          <ProjectsHeroImage />
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
