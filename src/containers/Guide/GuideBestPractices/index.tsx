import React, {FC} from 'react';

import {DocContainer, DocList} from 'components';

const GuideBestPractices: FC = () => {
  return (
    <DocContainer className="GuideBestPractices" title="Best Practices" lastUpdated="06 Mar 2021">
      <p>In this section we will review some best practices regarding the network as a whole.</p>

      <DocList variant="ol">
        <li>
          Never share your secret key with anyone. If possible, your secret key should never touch the internet. This
          means that it should not be stored on any website, sent to anyone through email, or shared on social media.
          There will be some applications that require the ability to sign and send transactions which will require
          access to a private key. However, for the majority of end users, it is advised to keep your secret keys as
          secret as possible.
        </li>
      </DocList>
    </DocContainer>
  );
};

export default GuideBestPractices;
