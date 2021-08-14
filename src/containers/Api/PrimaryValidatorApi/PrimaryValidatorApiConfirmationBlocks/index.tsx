import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const PrimaryValidatorApiConfirmationBlocks: FC = () => {
  return (
    <DocContainer
      className="PrimaryValidatorApiConfirmationBlocks"
      title="Confirmation Blocks"
      lastUpdated="07 Dec 2020"
    >
      <p>
        Primary validators will send confirmation blocks to confirmation validators for re-validation after a block has
        been added to the blockchain. No confirmation blocks will be sent to the primary validator directly.
      </p>

      <DocEndpoint endpoint="/confirmation_blocks/<block_identifier>/valid" method="GET" />
      <p>View details of an individual confirmation block.</p>
      <RequestResponseSnippet
        code={`{
  "message": {
    "block": {
      "account_number": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
      "message": {
        "balance_key": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
        "txs": [
          {
            "amount": 1,
            "recipient": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c"
          },
          {
            "amount": 1,
            "recipient": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5"
          },
          {
            "amount": 19590,
            "recipient": "fdae688d9e879ce89f164c6eb793d5a3c9e714bc6962a671275c0e2e1e6ea599"
          }
        ]
      },
      "signature": "a2ba346d98cb1f7ce6bf017240d674a9928796ddb564a2c8817e68ead0ea02d960e970fe581c6d3a25b9876e1873d51c882b23d843e32f511d9575ef60d2940d"
    },
    "block_identifier": "824614aa97edb391784b17ce6956b70aed31edf741c1858d43ae4d566b2a13ed",
    "updated_balances": [
      {
        "account_number": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c",
        "balance": 37
      },
      {
        "account_number": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
        "balance": 543360,
        "balance_lock": "92b9360e31f5ae4fa074ee5e03322aff6c275872e2afc31fbd523f022f18e421"
      },
      {
        "account_number": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5",
        "balance": 1068
      },
      {
        "account_number": "fdae688d9e879ce89f164c6eb793d5a3c9e714bc6962a671275c0e2e1e6ea599",
        "balance": 19590
      }
    ]
  },
  "node_identifier": "2262026a562b0274163158e92e8fbc4d28e519bc5ba8c1cf403703292be84a51",
  "signature": "a0f0412d638453a75da39e4911873a1e2a40fe22e9ec078eaeef62f34ba375470b8819135d95ccd5040abeefef75e7919689a6e97be3e6822edb7f9aff01e101"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default PrimaryValidatorApiConfirmationBlocks;
