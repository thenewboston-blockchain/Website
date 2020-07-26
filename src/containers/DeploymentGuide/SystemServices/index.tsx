import React, {FC} from 'react';

import {Commands, DocSubSection} from 'components';

const SystemServices: FC = () => {
  return (
    <DocSubSection className="SystemServices" title="System Services">
      <Commands
        code={`sudo systemctl start api && sudo systemctl start celery && sudo systemctl restart nginx`}
        heading="Start API service, restart NGINX, and verify services are active"
      />
      <Commands code={`sudo systemctl status api celery nginx redis`} heading="Check the status of the services" />
    </DocSubSection>
  );
};

export default SystemServices;
