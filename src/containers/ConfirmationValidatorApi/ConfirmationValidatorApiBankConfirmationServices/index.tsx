import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiBankConfirmationServices: FC = () => {
  return (
    <DocContainer
      className="ConfirmationValidatorApiBankConfirmationServices"
      title="Bank Confirmation Services"
      lastUpdated="31 Mar 2021"
    >
      <p>
        Bank confirmation services are created by the confirmation validator when a transaction is received from a
        connected bank. Upon receiving this payment, it is implied that the sending bank is purchasing confirmation
        services.
      </p>

      <DocEndpoint endpoint="/bank_confirmation_services" method="GET" />
      <RequestResponseSnippet
        code={`{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": "120a1b5d-8978-4fa5-a5dc-66dbe8ddbd75",
      "created_date": "2020-11-29T19:29:12.656665Z",
      "modified_date": "2020-11-29T19:29:12.656704Z",
      "end": "2020-11-30T19:28:36Z",
      "start": "2020-11-29T19:29:10Z",
      "bank": "c6ad67ee-d9b8-4c8f-ba62-f46213119689"
    },
    {
      "id": "cc56651f-b4e9-487d-82b9-64774a11a4e5",
      "created_date": "2020-11-29T19:30:21.485785Z",
      "modified_date": "2020-11-29T19:30:21.485832Z",
      "end": "2020-12-02T19:30:16Z",
      "start": "2020-11-29T19:30:18Z",
      "bank": "c6ad67ee-d9b8-4c8f-ba62-f46213119689"
    }
  ]
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiBankConfirmationServices;
