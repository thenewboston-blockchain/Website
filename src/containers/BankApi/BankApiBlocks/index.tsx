import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const BankApiBlocks: FC = () => {
  return (
    <DocContainer className="BankApiBlocks" title="Blocks" lastUpdated="15 Jan 2021">
      <p>
        A block is a group of one or more transactions. There are often multiple transactions (usually fees) to
        different recipients within a single block.
      </p>
      <p>
        More information about blocks can be found in the <NavLink to="/guide/blocks">Blocks</NavLink> section of the
        guide.
      </p>

      <DocEndpoint endpoint="/blocks" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="blocks" />
      <RequestResponseSnippet
        code={`{
  "count": 805,
  "next": "http://143.110.137.54/blocks?limit=2&offset=2",
  "previous": null,
  "results": [
    {
      "id": "c6fc11cf-8948-4d32-96c9-d56caa6d5b24",
      "created_date": "2020-10-08T02:18:07.324999Z",
      "modified_date": "2020-10-08T02:18:07.325044Z",
      "balance_key": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
      "sender": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
      "signature": "a2ba346d98cb1f7ce6bf017240d674a9928796ddb564a2c8817e68ead0ea02d960e970fe581c6d3a25b9876e1873d51c882b23d843e32f511d9575ef60d2940d"
    },
    {
      "id": "797b7324-905f-42e1-95a3-df918d01e3b0",
      "created_date": "2020-10-08T02:18:48.575966Z",
      "modified_date": "2020-10-08T02:18:48.576030Z",
      "balance_key": "92b9360e31f5ae4fa074ee5e03322aff6c275872e2afc31fbd523f022f18e421",
      "sender": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
      "signature": "54875b5fa4db317133b7195d5afa43e5d7c7659970b5c07f7408fb43524573ee0db3078daffa3a5fc341c6851a85c5128d8a79b8f71d5f7d87e275ccca1e8408"
    }
  ]
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/blocks" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'Senders account number',
            param: 'account_number',
          },
          {
            dataType: 'object',
            description: 'balance_key matching the sending accounts balance_lock and a list of transactions',
            param: 'message',
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
  "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
  "message": {
    "balance_key": "ce51f0d9facaa7d3e69657429dd3f961ce70077a8efb53dcda508c7c0a19d2e3",
    "txs": [
      {
        "amount": 12.5,
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
  "signature": "ee5a2f2a2f5261c1b633e08dd61182fd0db5604c853ebd8498f6f28ce8e2ccbbc38093918610ea88a7ad47c7f3192ed955d9d1529e7e390013e43f25a5915c0f"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "id": "3ff4ebb0-2b3d-429b-ba90-08133fcdee4e",
  "created_date": "2020-07-09T21:45:25.909512Z",
  "modified_date": "2020-07-09T21:45:25.909557Z",
  "balance_key": "ce51f0d9facaa7d3e69657429dd3f961ce70077a8efb53dcda508c7c0a19d2e3",
  "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
  "signature": "ee5a2f2a2f5261c1b633e08dd61182fd0db5604c853ebd8498f6f28ce8e2ccbbc38093918610ea88a7ad47c7f3192ed955d9d1529e7e390013e43f25a5915c0f"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiBlocks;
