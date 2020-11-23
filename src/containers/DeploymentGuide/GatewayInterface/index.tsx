import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
}

enum GatewayInterfaceNav {
  gatewayInterface = 'gateway-interface',
}

const GatewayInterface: FC<ComponentProps> = ({name}) => {
  return (
    <DocSubSection
      className="GatewayInterface"
      id={GatewayInterfaceNav.gatewayInterface}
      title="Gateway Interface (daphne)"
    >
      <CodeSnippet code="sudo nano /usr/local/bin/start_api.sh" heading="Create script to run daphne" />
      <CodeSnippet
        code={`#!/bin/bash

cd /var/www/${name}
daphne -p 8001 config.asgi:application`}
        heading="Paste in the following and save"
      />
      <CodeSnippet
        code="sudo chmod a+x /usr/local/bin/start_api.sh"
        heading="Update permissions for the shell script"
      />
    </DocSubSection>
  );
};

export default GatewayInterface;
