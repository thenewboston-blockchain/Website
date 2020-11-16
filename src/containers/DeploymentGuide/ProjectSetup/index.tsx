import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
}

enum ProjectSetupNav {
  projectSetup = 'project-setup',
}

const ProjectSetup: FC<ComponentProps> = ({name}) => {
  return (
    <DocSubSection className="ProjectSetup" id={ProjectSetupNav.projectSetup} title="Project Setup">
      <CodeSnippet code="sudo chmod go+w /var/www" heading="Update /var/www/ permissions" />
      <CodeSnippet
        code={`git clone https://github.com/thenewboston-developers/${name}.git /var/www/${name}
cd /var/www/${name}/
sudo pip3 install -r requirements/production.txt`}
        heading="Clone project to server and install dependencies"
      />
    </DocSubSection>
  );
};

export default ProjectSetup;
