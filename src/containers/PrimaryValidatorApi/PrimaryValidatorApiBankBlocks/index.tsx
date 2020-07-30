import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const PrimaryValidatorApiBankBlocks: FC = () => {
  return (
    <DocContainer className="PrimaryValidatorApiBankBlocks" title="Bank Blocks">
      <p>
        Bank blocks are blocks that have been signed by banks as a way of indicating that the block has passed initial
        validation. Blocks will be sent from end users to banks, and upon initial validation of those blocks the bank
        will sign the block and forward it to the primary validator for final validation.
      </p>

      <DocEndpoint endpoint="/bank_blocks" method="POST" />
      <RequestResponseSnippet
        code={`{
  "block": {
    "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
    "message": {
      "balance_key": "ee7a6d21feb2905605f9af446566e003decec3de2f55a6eff9815d41fcde59e0",
      "txs": [
        {
          "amount": 4.125,
          "recipient": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc"
        },
        {
          "amount": 1,
          "recipient": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8"
        },
        {
          "amount": 4,
          "recipient": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314"
        }
      ]
    },
    "signature": "e8b5215193cd5f91029b2a7a9ff2426b0a9fc0032f5a0f74ec0e6cc2f3ac9f20acd170f90e1557e561c85d34daa37d0cec90901f3d4c9579700847f67de22a05"
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "4f019d36d362f09960399fe51dd67d7ddbee27d73994558cf4015bb13260957f861afaa1694d40fd0397ed2a889834d8a20bff4c3417bbde383e2cd4e219cb0f"
}`}
        heading="Request"
      />
      <RequestResponseSnippet code={`{}`} heading="Response" />
    </DocContainer>
  );
};

export default PrimaryValidatorApiBankBlocks;
