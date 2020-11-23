import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const ConfirmationValidatorApiUpgradeRequest: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiUpgradeRequest" title="Upgrade Request">
      <p>
        When a bank alters the trust levels of their validators, if the results indicate that there are now confirmation
        validators that are more trusted than the bank's primary validator, the bank will send out a request to the
        confirmation validators requesting one of them to upgrade to a primary validator. This is because the banks
        always prefer the most trusted validator to be the primary validator for the network.
      </p>
      <p>
        More information about upgrade requests can be found in the{' '}
        <NavLink to="/guide/resync-process">Resync Process</NavLink> section of the guide.
      </p>

      <DocEndpoint endpoint="/upgrade_request" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'Node identifier of confirmation validator receiving the request',
            param: 'validator_node_identifier',
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
    "validator_node_identifier": "59479a31c3b91d96bb7a0b3e07f18d4bf301f1bb0bde05f8d36d9611dcbe7cbf"
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "90a365d1950b1765b973d3d21d763f9bea7eb1f9d1f33d6e9c3f8eb4803022f97ad3173474707b4786e556cccf4ca0a0e81d18edb655b090967c96c22c40140a"
}`}
        heading="Request"
      />
      <RequestResponseSnippet code={`{}`} heading="Response" />
      <TableParams
        items={[
          {
            dataType: 'OK',
            description: 'Accepted the request and upgraded to a PV',
            param: '200',
          },
          {
            dataType: 'Bad Request',
            description: 'Rejected the request',
            param: '400',
          },
        ]}
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiUpgradeRequest;
