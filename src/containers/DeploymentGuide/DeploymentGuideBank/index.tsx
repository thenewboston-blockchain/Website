import React, {FC, ReactNode} from 'react';

import {CodeSnippet, DocContainer, TableParams} from 'components';

import CeleryBank from '../CeleryBank';
import Firewall from '../Firewall';
import GatewayInterface from '../GatewayInterface';
import InstallDependencies from '../InstallDependencies';
import KeyGeneration from '../KeyGeneration';
import Nginx from '../Nginx';
import ProjectSetup from '../ProjectSetup';
import Redis from '../Redis';
import StaticFilesAndApplicationConfiguration from '../StaticFilesAndApplicationConfiguration';
import SystemServices from '../SystemServices';
import Troubleshooting from '../Troubleshooting';

const DeploymentGuideBank: FC = () => {
  const renderInitializationCommands = (): ReactNode => (
    <>
      <CodeSnippet code="python3 manage.py initialize_bank" heading="Initialize server as bank" />
      <TableParams
        headers={['Parameter', 'Description', 'Sample Value']}
        items={[
          {
            dataType: 'string',
            description: 'Public key used to sign requests to other nodes',
            param: 'node_identifier',
            sampleValue: 'd5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1',
          },
          {
            dataType: 'string',
            description: 'The account number where Tx fees will be sent',
            param: 'account_number',
            sampleValue: '5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8',
          },
          {
            dataType: 'decimal',
            description: 'Tx fee cost',
            param: 'default_transaction_fee',
            sampleValue: '1',
          },
          {
            dataType: 'string',
            description: 'Protocol other nodes will use to connect (http or https)',
            param: 'protocol',
            sampleValue: 'http',
          },
          {
            dataType: 'IP',
            description: 'Public IP address',
            param: 'ip_address',
            sampleValue: '64.225.47.205',
          },
          {
            dataType: 'integer',
            description: 'Port number',
            param: 'port',
            sampleValue: '80',
          },
          {
            dataType: 'string',
            description: 'API version',
            param: 'version',
            sampleValue: 'v1.0',
          },
        ]}
      />
      <CodeSnippet code="python3 manage.py set_primary_validator" heading="Connect to the primary validator" />
    </>
  );

  return (
    <DocContainer className="DeploymentGuideBank" title="Bank Deployment Guide" lastUpdated="07 Dec 2020">
      <p>This guide will detail the deployment instructions for banks.</p>
      <KeyGeneration />
      <InstallDependencies />
      <Firewall />
      <ProjectSetup name="Bank" />
      <Nginx name="Bank" />
      <Redis />
      <GatewayInterface name="Bank" />
      <CeleryBank name="Bank" />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration initializationCommand={renderInitializationCommands()} name="Bank" />
      <Troubleshooting />
    </DocContainer>
  );
};

export default DeploymentGuideBank;
