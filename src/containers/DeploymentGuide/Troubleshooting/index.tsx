import React, {FC} from 'react';

import {Commands, DocSubSection} from 'components';

const Troubleshooting: FC = () => {
  return (
    <DocSubSection className="Troubleshooting" title="Troubleshooting">
      <Commands code="sudo systemctl status api celery nginx redis" heading="Check the status of the services" />
      <Commands
        code={`sudo journalctl -u api.service
sudo journalctl -u celery.service
sudo journalctl -u nginx.service
`}
        heading="View the logs"
      />
    </DocSubSection>
  );
};

export default Troubleshooting;
