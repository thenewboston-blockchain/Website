import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
}

const GatewayInterface: FC<ComponentProps> = ({name}) => {
  return (
    <DocSubSection className="GatewayInterface" title="Gateway Interface (uwsgi)">
      <CodeSnippet code="sudo nano /usr/local/bin/start_api.sh" heading="Create script to run uwsgi" />
      <CodeSnippet
        code={`#!/bin/bash

cd /var/www/${name}
uwsgi --ini app.ini
`}
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
