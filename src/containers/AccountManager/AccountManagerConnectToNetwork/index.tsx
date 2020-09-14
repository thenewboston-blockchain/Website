import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import ConnectToTheNetworkForm from './ConnectToTheNetworkForm.png';

const AccountManagerConnectToNetwork: FC = () => {
  return (
    <DocContainer className="AccountManagerConnectToNetwork" title="Connect to the Network">
      <p>
        When the application is first started, you will be prompted to enter the address of a bank to connect to. The
        application may pre-populate the form with a suggested bank which you may use. You may also assign a nickname to
        the given bank. If a nickname is given, the application will refer to this bank by its nickname rather than its
        IP Address.
      </p>
      <p>
        You are always free to change your active bank at anytime while using the application. After filling in any
        additional form information, click the "Connect" button to connect to the network.
      </p>

      <DocImage alt="connect to the network form" bordered maxWidth={580} src={ConnectToTheNetworkForm} />
    </DocContainer>
  );
};

export default AccountManagerConnectToNetwork;
