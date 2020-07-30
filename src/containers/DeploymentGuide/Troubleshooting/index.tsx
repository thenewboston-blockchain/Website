import React, {FC} from 'react';

import {CodeSnippet, DocSubSection} from 'components';

const Troubleshooting: FC = () => {
  return (
    <DocSubSection className="Troubleshooting" title="Troubleshooting">
      <CodeSnippet code="sudo systemctl status api celery nginx redis" heading="Check the status of the services" />
      <CodeSnippet
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
