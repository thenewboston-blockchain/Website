import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

enum InstallDependenciesNav {
  installDependencies = 'install-dependencies',
}

const InstallDependencies: FC = () => {
  return (
    <DocSubSection
      className="InstallDependencies"
      id={InstallDependenciesNav.installDependencies}
      title="Install Dependencies"
    >
      <CodeSnippet
        code={`sudo add-apt-repository universe
sudo apt -y update && sudo apt -y upgrade
sudo apt -y install build-essential nginx python3-pip redis-server`}
        heading="Update and install packages"
      />
    </DocSubSection>
  );
};

export default InstallDependencies;
