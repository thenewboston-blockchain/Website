import React from 'react';

import Commands from 'components/Commands';

const ProjectSetup = () => {
  return (
    <>
      <h2>Project Setup</h2>

      <Commands code={`sudo chmod go+w /var/www`} comment="Update /var/www/ permissions" />
      <Commands
        code={`git clone https://github.com/thenewboston-developers/Validator.git /var/www/Validator
cd /var/www/Validator/
sudo pip3 install -r requirements/production.txt
`}
        comment="Clone project to server and install dependencies"
      />
    </>
  );
};

export default ProjectSetup;
