import React, {FC} from 'react';

import {Commands} from 'components';

interface ComponentProps {
  name: string;
}

const GatewayInterface: FC<ComponentProps> = ({name}) => {
  return (
    <>
      <h2>Gateway Interface (uwsgi)</h2>

      <Commands code={`sudo nano /usr/local/bin/start_api.sh`} heading="Create script to run uwsgi" />
      <Commands
        code={`#!/bin/bash

cd /var/www/${name}
uwsgi --ini app.ini
`}
        heading="Paste in the following and save"
      />
      <Commands code={`sudo chmod a+x /usr/local/bin/start_api.sh`} heading="Update permissions for the shell script" />
    </>
  );
};

export default GatewayInterface;
