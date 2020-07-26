import React, {FC} from 'react';

import {Commands, DocSubSection} from 'components';

const InstallDependencies: FC = () => {
  return (
    <DocSubSection className="InstallDependencies" title="Install Dependencies">
      <Commands
        code={`sudo add-apt-repository universe
sudo apt -y update && sudo apt -y upgrade

> keep the local version currently installed

sudo apt -y install build-essential nginx python3-pip redis-server
`}
        heading="Update and install packages"
      />
    </DocSubSection>
  );
};

export default InstallDependencies;
