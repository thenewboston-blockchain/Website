import React, {FC, ReactNode} from 'react';

import {CodeSnippet, DocContainer, TableParams} from 'components';

import CeleryValidator from '../CeleryValidator';
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

const DeploymentGuideValidator: FC = () => {
  const renderInitializationCommands = (): ReactNode => (
    <>
      <CodeSnippet code="python3 manage.py initialize_validator" heading="Initialize validator node" />
      <TableParams
        headers={['Parameter', 'Description', 'Sample Value']}
        items={[
          {
            dataType: 'string',
            description: 'Public key used to sign requests to other nodes',
            param: 'node_identifier',
            sampleValue: '3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521',
          },
          {
            dataType: 'string',
            description: 'The account number where Tx fees will be sent',
            param: 'account_number',
            sampleValue: 'ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314',
          },
          {
            dataType: 'decimal',
            description: 'Tx fee cost',
            param: 'default_transaction_fee',
            sampleValue: '4',
          },
          {
            dataType: 'string',
            description: 'Network standardized type of node (PRIMARY_VALIDATOR or CONFIRMATION_VALIDATOR)',
            param: 'node_type',
            sampleValue: 'PRIMARY_VALIDATOR',
          },
          {
            dataType: 'string',
            description: 'Identifier of the last block that was used when the root account file was generated',
            param: 'seed_block_identifier',
            sampleValue: ' ',
          },
          {
            dataType: 'URL',
            description:
              'Record of all account balances at the moment in time that the validator was first set to "primary"',
            param: 'root_account_file',
            sampleValue:
              'https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json',
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
      <CodeSnippet
        code="python3 manage.py set_primary_validator"
        heading="If setting up confirmation validator, run this script to connect to the primary validator"
      />
    </>
  );

  return (
    <DocContainer className="DeploymentGuideValidator" title="Validator Deployment Guide" lastUpdated="07 Dec 2020">
      <p>This guide will detail the deployment instructions for both primary validators and confirmation validators.</p>
      <KeyGeneration />
      <InstallDependencies />
      <Firewall />
      <ProjectSetup name="Validator" />
      <Nginx name="Validator" />
      <Redis />
      <GatewayInterface name="Validator" />
      <CeleryValidator name="Validator" />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration initializationCommand={renderInitializationCommands()} name="Validator" />
      <Troubleshooting />
    </DocContainer>
  );
};

export default DeploymentGuideValidator;
