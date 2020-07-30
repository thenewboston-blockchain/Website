import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiBankConfirmationServices: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiBankConfirmationServices" title="Bank Confirmation Services">
      <p>TODO: In Progress...</p>

      <DocEndpoint endpoint="/sample" method="GET" />
      <RequestResponseSnippet code={`{}`} heading="Response" />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiBankConfirmationServices;
