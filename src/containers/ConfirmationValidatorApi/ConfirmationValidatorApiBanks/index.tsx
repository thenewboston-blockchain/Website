import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiBanks: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiBanks" title="Banks">
      <p>The confirmation validators will maintain a record of all connected banks.</p>

      <DocEndpoint endpoint="/banks" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
    "ip_address": "192.168.1.232",
    "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
    "port": 8000,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "1.0000000000000000",
    "confirmation_expiration": null,
    "trust": "0.00"
  }
]`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiBanks;
