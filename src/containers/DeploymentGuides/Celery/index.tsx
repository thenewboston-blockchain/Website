import React, {FC} from 'react';

import Commands from 'components/Commands';

interface ComponentProps {
  name: string;
}

const Celery: FC<ComponentProps> = ({name}) => {
  return (
    <>
      <h2>Celery</h2>

      <Commands
        code={`cd /etc/
sudo mkdir ${name.toLowerCase()}
sudo mkdir /var/log/celery
sudo chown deploy /var/log/celery
sudo nano /etc/${name.toLowerCase()}/environment
`}
        comment="Create a file to contain our environment variables"
      />
      <Commands
        code={`DJANGO_APPLICATION_ENVIRONMENT=production
NETWORK_SIGNING_KEY=6f812a35643b55a77f71c3b722504fbc5918e83ec72965f7fd33865ed0be8f81
`}
      />
      <Commands code={`sudo nano /etc/${name.toLowerCase()}/celery.conf`} comment="Create celery env config" />
      <Commands
        code={`CELERYD_NODES="w1"
CELERY_BIN="/usr/local/bin/celery"
CELERY_APP="config.settings"
CELERYD_MULTI="multi"
CELERYD_OPTS="--time-limit=1800 --concurrency=2"
CELERYD_PID_FILE="/var/log/celery/%n.pid"
CELERYD_LOG_FILE="/var/log/celery/%n%I.log"
CELERYD_LOG_LEVEL="DEBUG"
DJANGO_APPLICATION_ENVIRONMENT=production`}
      />
      <Commands code={`sudo nano /etc/systemd/system/api.service`} comment="Create service" />
      <Commands
        code={`[Unit]
Description = Service to run Django API
After = network.target

[Service]
EnvironmentFile = /etc/${name.toLowerCase()}/environment
User = deploy
ExecStart = /usr/local/bin/start_api.sh

[Install]
WantedBy = multi-user.target
`}
      />
      <Commands code={`sudo chmod a+x /etc/systemd/system/api.service`} comment="Update permissions for file" />
      <Commands code={`sudo nano /etc/systemd/system/celery.service`} comment="Create service for celery" />
      <Commands
        code={`[Unit]
Description=${name} Celery Service
After=network.target

[Service]
Type=forking
User=deploy
EnvironmentFile=/etc/${name.toLowerCase()}/celery.conf
WorkingDirectory=/var/www/${name}
ExecStart=/bin/sh -c '\${CELERY_BIN} multi start \${CELERYD_NODES} \\
  -A \${CELERY_APP} --pidfile=\${CELERYD_PID_FILE} \\
  --logfile=\${CELERYD_LOG_FILE} --loglevel=\${CELERYD_LOG_LEVEL} \${CELERYD_OPTS}'
ExecStop=/bin/sh -c '\${CELERY_BIN} multi stopwait \${CELERYD_NODES} \\
  --pidfile=\${CELERYD_PID_FILE}'
ExecReload=/bin/sh -c '\${CELERY_BIN} multi restart \${CELERYD_NODES} \\
  -A \${CELERY_APP} --pidfile=\${CELERYD_PID_FILE} \\
  --logfile=\${CELERYD_LOG_FILE} --loglevel=\${CELERYD_LOG_LEVEL} \${CELERYD_OPTS}'

[Install]
WantedBy=multi-user.target
`}
      />
      <Commands
        code={`sudo systemctl daemon-reload && sudo systemctl enable api && sudo systemctl enable celery`}
        comment="Reload systemd and enable both services"
      />
      <Commands code={`ls /etc/systemd/system/multi-user.target.wants/`} comment="Verify it is enabled" />
    </>
  );
};

export default Celery;
