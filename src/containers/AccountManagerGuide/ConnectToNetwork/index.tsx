import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import ConnectToTheNetworkForm from './ConnectToTheNetworkForm.png';

const ConnectToNetwork: FC = () => {
  return (
    <DocContainer className="ConnectToNetwork" title="Connect to the Network">
      <p>Connect</p>
      <DocImage alt="connect to the network form" maxWidth={600} src={ConnectToTheNetworkForm} />
      <p>Now</p>
    </DocContainer>
  );
};

export default ConnectToNetwork;
