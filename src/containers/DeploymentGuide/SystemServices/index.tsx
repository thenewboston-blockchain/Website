import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

enum SystemServicesNav {
  systemServices = 'system-services',
}

const SystemServices: FC = () => {
  return (
    <DocSubSection className="SystemServices" id={SystemServicesNav.systemServices} title="System Services">
      <CodeSnippet
        code="sudo systemctl start api && sudo systemctl start celery && sudo systemctl restart nginx"
        heading="Start API service, restart NGINX, and verify services are active"
      />
      <CodeSnippet code="sudo systemctl status api celery nginx redis" heading="Check the status of the services" />
    </DocSubSection>
  );
};

export default SystemServices;
