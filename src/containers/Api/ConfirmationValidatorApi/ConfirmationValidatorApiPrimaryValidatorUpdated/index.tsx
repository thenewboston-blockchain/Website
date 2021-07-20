import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const ConfirmationValidatorApiPrimaryValidatorUpdated: FC = () => {
  return (
    <DocContainer
      className="ConfirmationValidatorApiPrimaryValidatorUpdated"
      title="Primary Validator Updated"
      lastUpdated="26 Dec 2020"
    >
      <p>
        The last step in the resync process is the notice that is sent from banks to their CVs to indicate that they are
        leaving the current network and switching to a new PV (a new network).
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
  "node_identifier": "ce236a006a0aec488ad8e5161dd018b2ce84d9e4d9adc897eca7fb112864198f",
  "signature": "0964ba25c6b1433ab921e357c67bfc07fa9b931897e0ecd719e9acccf2f60a5e60501c1e134a1ea1ac4724a42f2d60d441a32a6f42a0bccbef1dc2c5a4c0a200"
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
