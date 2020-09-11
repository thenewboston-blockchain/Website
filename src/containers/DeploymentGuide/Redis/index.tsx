import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

enum RedisNav {
  redis = 'redis',
}

const Redis: FC = () => {
  return (
    <DocSubSection className="Redis" id={RedisNav.redis} title="Redis">
      <CodeSnippet
        code="sudo nano /etc/redis/redis.conf"
        heading="Since we are running Ubuntu, which uses the systemd init system, change this to systemd"
      />
      <CodeSnippet
        code={`# Note: these supervision methods only signal "process is ready."
#       They do not enable continuous liveness pings back to your supervisor.
supervised systemd`}
        heading="Update the following line in the configuration and save file"
      />
      <CodeSnippet
        code="sudo systemctl restart redis.service"
        heading="Restart the Redis service to reflect the changes you made to the configuration file"
      />
      <CodeSnippet code="sudo systemctl status redis" heading="Check status to make sure Redis is running correctly" />
    </DocSubSection>
  );
};

export default Redis;
