import React from 'react';

import {Commands} from 'components';

const Troubleshooting = () => {
  return (
    <>
      <h2>Troubleshooting</h2>

      <Commands code={`sudo systemctl status api celery nginx redis`} heading="Check the status of the services" />
      <Commands
        code={`sudo journalctl -u api.service
sudo journalctl -u celery.service
sudo journalctl -u nginx.service
`}
        heading="View the logs"
      />
    </>
  );
};

export default Troubleshooting;
