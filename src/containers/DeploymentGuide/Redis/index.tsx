import React, {FC} from 'react';

import {Commands, DocSubSection} from 'components';

const Redis: FC = () => {
  return (
    <DocSubSection className="Redis" title="Redis">
      <Commands
        code={`sudo nano /etc/redis/redis.conf`}
        heading="Since we are running Ubuntu, which uses the systemd init system, change this to systemd"
      />
      <Commands
        code={`# Note: these supervision methods only signal "process is ready."
#       They do not enable continuous liveness pings back to your supervisor.
supervised systemd`}
        heading="Update the following line in the configuration and save file"
      />
      <Commands
        code={`sudo systemctl restart redis.service`}
        heading="Restart the Redis service to reflect the changes you made to the configuration file"
      />
      <Commands code={`sudo systemctl status redis`} heading="Check status to make sure Redis is running correctly" />
    </DocSubSection>
  );
};

export default Redis;
