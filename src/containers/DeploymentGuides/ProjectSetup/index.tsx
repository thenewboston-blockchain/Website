import React from 'react';

import Commands from 'components/Commands';

const ProjectSetup = () => {
  return (
    <>
      <h2>Project Setup</h2>

      <Commands code={`sudo chmod go+w /var/www`} comment="Update /var/www/ permissions" />
      <Commands
        code={`cd
git clone git@github.com:thenewboston-developers/Validator.git /var/www/Validator
cd /var/www/Validator/
`}
        comment="Clone project to server"
      />
    </>
  );
};

export default ProjectSetup;
