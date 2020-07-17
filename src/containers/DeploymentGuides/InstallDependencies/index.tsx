import React from 'react';

import Commands from 'components/Commands';

const InstallDependencies = () => {
  return (
    <>
      <h2>Install Dependencies</h2>

      <Commands
        code={`sudo add-apt-repository universe
sudo apt -y update && sudo apt -y upgrade

> keep the local version currently installed

sudo apt -y install build-essential nginx python3-pip redis-server
`}
        comment="Update and install packages"
      />
    </>
  );
};

export default InstallDependencies;
