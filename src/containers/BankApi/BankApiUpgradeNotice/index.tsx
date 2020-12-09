import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const BankApiUpgradeNotice: FC = () => {
  return (
    <DocContainer className="BankApiUpgradeNotice" title="Upgrade Notice" lastUpdated="07 Dec 2020">
      <p>
        After a confirmation validator has upgraded to a primary validator, it will send out an upgrade notice to all
        connected banks.
      </p>
      <p>
        More information about upgrade notices can be found in the{' '}
        <NavLink to="/guide/resync-process">Resync Process</NavLink> section of the guide.
      </p>

      <DocEndpoint endpoint="/upgrade_notice" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'Node identifier of bank receiving the request',
            param: 'bank_node_identifier',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "bank_node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1"
  },
  "node_identifier": "59479a31c3b91d96bb7a0b3e07f18d4bf301f1bb0bde05f8d36d9611dcbe7cbf",
  "signature": "e9862cf176523449417b5f3426cb7bf0a3813ef04fae3330faa50b6468d9da9c55967a24c40040eaa6bc33843804bda9a0307bffe906ed8c7b2a55c15dabaa0d"
}`}
        heading="Request"
      />
      <RequestResponseSnippet code={`{}`} heading="Response" />
      <TableParams
        items={[
          {
            dataType: 'OK',
            description: 'Bank has set the requesting validator as their new primary validator',
            param: '200',
          },
          {
            dataType: 'Bad Request',
            description: 'Bank is remaining on their existing network (will be deleted by the requesting validator)',
            param: '400',
          },
        ]}
      />
    </DocContainer>
  );
};

export default BankApiUpgradeNotice;
