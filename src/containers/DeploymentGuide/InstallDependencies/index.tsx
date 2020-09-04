import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

const InstallDependencies: FC = () => {
  return (
    <DocSubSection className="InstallDependencies" title="Install Dependencies">
      <CodeSnippet
        code={`sudo add-apt-repository universe
sudo apt -y update && sudo apt -y upgrade
sudo apt -y install build-essential nginx python3-pip redis-server
`}
        heading="Update and install packages"
      />
    </DocSubSection>
  );
};

export default InstallDependencies;
