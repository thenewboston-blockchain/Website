import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const BankApiBlocks: FC = () => {
  return (
    <DocContainer className="BankApiBlocks" title="Blocks">
      <p>
        A block is a group of one or more transactions. There are often multiple transactions (usually fees) to
        different recipients within a single block.
      </p>
      <p>
        More information about blocks can be found in the <NavLink to="/guide/blocks">Blocks</NavLink> section of the
        guide.
      </p>

      <DocEndpoint endpoint="/blocks" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "id": "c1ad29ef-7342-4bf2-9e8c-f31379b4dcee",
    "created_date": "2020-07-09T04:36:44.061174Z",
    "modified_date": "2020-07-09T04:36:44.061197Z",
    "balance_key": "218b4d6348a1f17eb4479a3fdcefa1859ea1d27918051412d00d8e275c19d5a8",
    "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
    "signature": "a9660b77062877c040fc9fd62d994ee2ae47da0969172e04fe992510f703dfd9055e20ddd957c34cc7683db8fc3bc684ae35074cc25b9982a375a8d618697c0c"
  },
  {
    "id": "feb02965-bce6-4860-ae60-93884bfac245",
    "created_date": "2020-07-09T04:37:00.118328Z",
    "modified_date": "2020-07-09T04:37:00.118353Z",
    "balance_key": "e7174d983d4a85e25f352eb0d083a1d54243ecdc60a7d4ca548742f48a10c342",
    "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
    "signature": "5e3697fcb48d9bc4b6418f2839e699fe2189b0642802ab1c52e97dba1bc2693fba86b2c68f4b962b90f2a2a7d646b41da85a467e970bfbcfc2033c0aac357707"
  },
  {
    "id": "d0e8a43e-75d7-4dbf-9ab2-1b3a25feeb29",
    "created_date": "2020-07-09T04:37:21.589858Z",
    "modified_date": "2020-07-09T04:37:21.589883Z",
    "balance_key": "4375649fe1ee0b72df2001044a0a26ddb3feb45542ce47323ba587d371b70cff",
    "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
    "signature": "dcde90868e77259a0c22c7e97236c1de6d265c1c0d6a00850bd31d3ae3058d9500467fea6a06f4c365bb212ea9fdecbeb542aa70cd05dabe1e14c7566c2b2c0f"
  }
]`}
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
