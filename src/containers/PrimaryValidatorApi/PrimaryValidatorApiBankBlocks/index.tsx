import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const PrimaryValidatorApiBankBlocks: FC = () => {
  return (
    <DocContainer className="PrimaryValidatorApiBankBlocks" title="Bank Blocks" lastUpdated="07 Dec 2020">
      <p>
        Bank blocks are blocks that have been signed by banks as a way of indicating that the block has passed initial
        validation. Blocks will be sent from end users to banks, and upon initial validation of those blocks the bank
        will sign the block and forward it to the primary validator for final validation.
      </p>

      <DocEndpoint endpoint="/bank_blocks" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'object',
            description: 'A block contains a list of updated account balances of all accounts involved.',
            param: 'block',
          },
          {
            dataType: 'string',
            description: "Bank's node_identifier",
            param: 'node_identifier',
          },
          {
            dataType: 'string',
            description: 'Signature is signed by the bank.',
            param: 'signature',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "block": {
    "account_number": "755ba2840909ae88987ef9de08dc5882ffa1e3df774e95a9500f5a9cfb4fe0be",
    "message": {
      "balance_key": "755ba2840909ae88987ef9de08dc5882ffa1e3df774e95a9500f5a9cfb4fe0be",
      "txs": [
        {
          "amount": 1,
          "recipient": "5e76c46de6256db3987de8d78ef4af8d792979a95fdd1094bcad3e00c82d0e08"
        },
        {
          "amount": 1,
          "recipient": "6e3232cb30bdcb79494ca9c1993dfbe6845a2f079438a7d56502f94fbd64bb2b"
        },
        {
          "amount": 1,
          "recipient": "7bb9787dec7ee1978b43c182e554e5e5e62627e80f3fa6681e7f983930dbb1be"
        }
      ]
    },
    "signature": "78e6288a1a3a38af78f824c8cbe9f6152eafe692828df93c759e41f0088839388a45cf22739fb62de7aa3a9caee51222293bbe8a6f5ac64ded03356301870a0a"
  },
  "node_identifier": "c292c7c13c46e0abcb6c84b1f35a24efb5dd4605445a2864754e02f174b2a192",
  "signature": "a0d0421c4ea59283be8296fb8dc953ac453b09dcd747a240e3de7cff15eb5db11d557bffcc1729a00ce67dc50f3352808111e133580b8621f970ea02e72bec07"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "account_number": "755ba2840909ae88987ef9de08dc5882ffa1e3df774e95a9500f5a9cfb4fe0be",
  "message": {
    "balance_key": "755ba2840909ae88987ef9de08dc5882ffa1e3df774e95a9500f5a9cfb4fe0be",
    "txs": [
      {
        "amount": 1,
        "recipient": "5e76c46de6256db3987de8d78ef4af8d792979a95fdd1094bcad3e00c82d0e08"
      },
      {
        "amount": 1,
        "recipient": "6e3232cb30bdcb79494ca9c1993dfbe6845a2f079438a7d56502f94fbd64bb2b"
      },
      {
        "amount": 1,
        "recipient": "7bb9787dec7ee1978b43c182e554e5e5e62627e80f3fa6681e7f983930dbb1be"
      }
    ]
  },
  "signature": "78e6288a1a3a38af78f824c8cbe9f6152eafe692828df93c759e41f0088839388a45cf22739fb62de7aa3a9caee51222293bbe8a6f5ac64ded03356301870a0a"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default PrimaryValidatorApiBankBlocks;
