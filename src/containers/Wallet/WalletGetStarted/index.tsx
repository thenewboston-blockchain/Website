import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import ConnectToTheNetworkForm from './ConnectToTheNetworkForm.png';
import GetStarted from './GetStarted.png';

const WalletGetStarted: FC = () => {
  return (
    <DocContainer className="WalletGetStarted" title="Get Started" lastUpdated="07 Dec 2020">
      <p>
        When the application is first started, it will attempt to automatically connect to the network. If successful
        you will be prompted to either create a new account or add an existing account. To create a new account, simply
        input a nickname for the account and then click the "Add" button.
      </p>
      <DocImage alt="get started modal" bordered maxWidth={1200} src={GetStarted} />

      <p>
        If the application can not automatically connect to the network then you will be prompted to enter the address
        of a bank to connect to. You may also assign a nickname to the given bank. If a nickname is given, the
        application will refer to this bank by its nickname rather than its IP Address.
      </p>
      <p>
        You are always free to change your active bank at anytime while using the application. After filling in any
        additional form information, click the "Connect" button to connect to the network.
      </p>
      <DocImage alt="connect to the network form" bordered maxWidth={580} src={ConnectToTheNetworkForm} />
    </DocContainer>
  );
};

export default WalletGetStarted;
