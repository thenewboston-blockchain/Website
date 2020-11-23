import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const ConfirmationValidatorApiPrimaryValidatorUpdated: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiPrimaryValidatorUpdated" title="Primary Validator Updated">
      <p>
        The last step in the resync process is the notice that is sent from banks to their CVs to indicate that they are
        leaving the current network and switching to a new PV (a new network).
      </p>
      <p>
        More information about the updating of primary validators can be found in the{' '}
        <NavLink to="/guide/resync-process">Resync Process</NavLink> section of the guide.
      </p>

      <DocEndpoint endpoint="/primary_validator_updated" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'IP address, port, and protocol of the banks new primary validator',
            param: 'message',
          },
          {
            dataType: 'string',
            description: 'Banks node identifier',
            param: 'node_identifier',
          },
          {
            dataType: 'string',
            description: 'Hex value of the signed message',
            param: 'signature',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "ip_address": "192.168.1.20",
    "port": "8000",
    "protocol": "http"
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "ccb4c9f0669abfcd1cea330fa4e45d87689fb08d2fd26b4cf05c87b2fdb1dae543024888243a84d02fd9bb8320c41f4de45d6212747e49a02a365fd42883fd01"
}`}
        heading="Request"
      />
      <RequestResponseSnippet code={`{}`} heading="Response" />
      <TableParams
        items={[
          {
            dataType: 'OK',
            description: 'Follow bank and sync to the new primary validator (new network)',
            param: '200',
          },
          {
            dataType: 'Bad Request',
            description: 'Does not follow bank and remains on current network',
            param: '400',
          },
        ]}
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiPrimaryValidatorUpdated;
