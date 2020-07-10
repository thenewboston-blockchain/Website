import React from 'react';

import Commands from 'components/Commands';

const ProjectSetup = () => {
  return (
    <>
      <h2>Project Setup</h2>

      <Commands code={`ssh-keygen -t rsa -b 4096 -C "buckyroberts@gmail.com"`} comment="Generate SSH key pair" />
      <Commands code={`cat ~/.ssh/id_rsa.pub`} comment="Display SSH key in console" />

      <p>
        Add your SSH key to GitHub: <a href="https://github.com/settings/keys">https://github.com/settings/keys</a>
      </p>

      <Commands code={`ssh -T git@github.com`} comment="Test connection" />
      <Commands code={`sudo chmod go+w /var/www`} comment="Update /var/www/ permissions" />
      <Commands
        code={`cd
git clone git@github.com:thenewboston-developers/Validator.git /var/www/Validator
cd /var/www/Validator/
`}
        comment="Clone project to server"
      />
      <Commands
        code={`nano requirements/local.txt
# Remove first requirement (private GitHub repo)
sudo pip3 install -r requirements/local.txt`}
        comment="Temp 1/2"
      />
      <Commands
        code={`cd /var/www/
git clone git@github.com:thenewboston-developers/thenewboston-python.git
cd /var/www/Validator/
sudo pip3 install file:///var/www/thenewboston-python/dist/thenewboston-0.0.1.tar.gz
`}
        comment="Temp 2/2"
      />
    </>
  );
};

export default ProjectSetup;
