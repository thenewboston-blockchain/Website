import React from 'react';

import Commands from 'components/Commands';

const SystemServices = () => {
  return (
    <>
      <h2>System Services</h2>

      <Commands
        code={`sudo systemctl start api && sudo systemctl start celery && sudo systemctl restart nginx`}
        comment="Start API service, restart NGINX, and verify services are active"
      />
      <Commands code={`sudo systemctl status api celery nginx redis`} comment="Check the status of the services" />
    </>
  );
};

export default SystemServices;
