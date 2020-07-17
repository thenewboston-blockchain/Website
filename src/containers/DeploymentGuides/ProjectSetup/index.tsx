import React from 'react';

import Commands from 'components/Commands';

const ProjectSetup = () => {
  return (
    <>
      <h2>Project Setup</h2>

      <Commands code={`ssh-keygen -t rsa -b 4096 -C "your@email.com"`} comment="Generate SSH key pair" />
      <Commands code={`cat ~/.ssh/id_rsa.pub`} comment="Display SSH key in console and copy" />

      <p>
        Add your SSH key to GitHub: <a href="https://github.com/settings/keys">https://github.com/settings/keys</a>
      </p>

      <Commands code={`ssh -T git@github.com`} comment="Test connection" />
      <Commands code={`sudo chmod go+w /var/www`} comment="Update /var/www/ permissions" />
      <Commands
        code={`cd
git clone git@github.com:thenewboston-developers/Validator.git /var/www/Validator
cd /var/www/Validator/
sudo pip3 install -r requirements/production.txt
`}
        comment="Clone project to server and install dependencies"
      />
    </>
  );
};

export default ProjectSetup;
