import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

interface ComponentProps {
  name: string;
  networkSigningKey: string;
}

enum CeleryNav {
  celery = 'celery',
}

const CeleryValidator: FC<ComponentProps> = ({name, networkSigningKey}) => {
  return (
    <DocSubSection className="CeleryValidator" id={CeleryNav.celery} title="Celery">
      <CodeSnippet
        code={`cd /etc/
sudo mkdir ${name.toLowerCase()}
sudo mkdir /var/log/celery
sudo chown deploy /var/log/celery
sudo nano /etc/${name.toLowerCase()}/environment`}
        heading="Create a file to contain our environment variables"
      />
      <CodeSnippet
        code={`DJANGO_APPLICATION_ENVIRONMENT=production
NETWORK_SIGNING_KEY=${networkSigningKey}`}
      />
      <CodeSnippet code={`sudo nano /etc/${name.toLowerCase()}/celery.conf`} heading="Create celery env config" />
      <CodeSnippet
        code={`CELERYD_NODES="w1 w2 w3"
CELERY_BIN="/usr/local/bin/celery"
CELERY_APP="config.settings"
CELERYD_MULTI="multi"
CELERYD_OPTS="--time-limit=1800 -Q:w1 celery -c:w1 2 -Q:w2 block_queue -P:w2 solo -Q:w3 confirmation_block_queue -P:w3 solo"
CELERYD_PID_FILE="/var/log/celery/%n.pid"
CELERYD_LOG_FILE="/var/log/celery/%n%I.log"
CELERYD_LOG_LEVEL="DEBUG"
DJANGO_APPLICATION_ENVIRONMENT=production
NETWORK_SIGNING_KEY=${networkSigningKey}`}
      />
      <CodeSnippet code="sudo nano /etc/systemd/system/api.service" heading="Create service" />
      <CodeSnippet
        code={`[Unit]
Description = Service to run Django API
After = network.target

[Service]
EnvironmentFile = /etc/${name.toLowerCase()}/environment
User = deploy
ExecStart = /usr/local/bin/start_api.sh

[Install]
WantedBy = multi-user.target`}
      />
      <CodeSnippet code="sudo chmod a+x /etc/systemd/system/api.service" heading="Update permissions for file" />
      <CodeSnippet code="sudo nano /etc/systemd/system/celery.service" heading="Create service for celery" />
      <CodeSnippet
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
WantedBy=multi-user.target`}
      />
      <CodeSnippet
        code="sudo systemctl daemon-reload && sudo systemctl enable api && sudo systemctl enable celery"
        heading="Reload systemd and enable both services"
      />
      <CodeSnippet code="ls /etc/systemd/system/multi-user.target.wants/" heading="Verify it is enabled" />
    </DocSubSection>
  );
};

export default CeleryValidator;
