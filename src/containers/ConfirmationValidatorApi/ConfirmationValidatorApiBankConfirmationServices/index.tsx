import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiBankConfirmationServices: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiBankConfirmationServices" title="Bank Confirmation Services">
      <p>
        Bank confirmation services are created by the confirmation validator when a transaction is received from a
        connected bank. Upon receiving this payment, it is implied that the sending bank is purchasing confirmation
        services.
      </p>
      <p>
        More information about the confirmation process can be found in the{' '}
        <NavLink to="/guide/confirmation-services">Confirmation Services</NavLink> section of the guide.
      </p>

      <DocEndpoint endpoint="/bank_confirmation_services" method="GET" />
      <RequestResponseSnippet
        code={`{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": "09e96a28-4d71-4123-85a3-882a9bdad114",
      "created_date": "2020-09-11T02:15:13.638227Z",
      "modified_date": "2020-09-11T02:15:13.638326Z",
      "end": "2020-09-23T00:06:55.320993Z",
      "start": "2020-09-20T00:06:55.320993Z",
      "bank": "b58b4b8a-d8f9-4395-a0de-f9df150bb093"
    },
    {
      "id": "6caa533f-34e6-4c65-84a5-5c4516cb71e8",
      "created_date": "2020-09-11T02:16:08.014656Z",
      "modified_date": "2020-09-11T02:16:08.014697Z",
      "end": "2020-09-25T12:06:55.320993Z",
      "start": "2020-09-23T00:06:55.320993Z",
      "bank": "b58b4b8a-d8f9-4395-a0de-f9df150bb093"
    }
  ]
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiBankConfirmationServices;
