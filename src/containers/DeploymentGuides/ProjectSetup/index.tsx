import React, {FC} from 'react';

import Commands from 'components/Commands';

interface ComponentProps {
  name: string;
}

const ProjectSetup: FC<ComponentProps> = ({name}) => {
  return (
    <>
      <h2>Project Setup</h2>

      <Commands code={`sudo chmod go+w /var/www`} comment="Update /var/www/ permissions" />
      <Commands
        code={`git clone https://github.com/thenewboston-developers/${name}.git /var/www/${name}
cd /var/www/${name}/
sudo pip3 install -r requirements/production.txt
`}
        comment="Clone project to server and install dependencies"
      />
    </>
  );
};

export default ProjectSetup;
