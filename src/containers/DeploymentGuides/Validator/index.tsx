import React from 'react';

import Celery from 'containers/DeploymentGuides/Celery';
import Commands from 'components/Commands';
import Firewall from 'containers/DeploymentGuides/Firewall';
import GatewayInterface from 'containers/DeploymentGuides/GatewayInterface';
import InstallDependencies from 'containers/DeploymentGuides/InstallDependencies';
import NGINX from 'containers/DeploymentGuides/NGINX';
import ParamsTable from 'components/ParamsTable';
import ProjectSetup from 'containers/DeploymentGuides/ProjectSetup';
import Redis from 'containers/DeploymentGuides/Redis';
import StaticFilesAndApplicationConfiguration from 'containers/DeploymentGuides/StaticFilesAndApplicationConfiguration';
import SystemServices from 'containers/DeploymentGuides/SystemServices';
import Troubleshooting from 'containers/DeploymentGuides/Troubleshooting';

const Validator = () => {
  const renderInitializationCommands = () => (
    <>
      <Commands code={`python3 manage.py initialize_validator`} comment="Initialize server as primary validator" />
      <ParamsTable
        items={[
          {
            param: 'node_identifier',
            dataType: 'string',
            description: 'Public key used to sign requests to other nodes',
            sampleValue: '3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521',
          },
          {
            param: 'account_number',
            dataType: 'string',
            description: 'The account number where Tx fees will be sent',
            sampleValue: 'ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314',
          },
          {
            param: 'default_transaction_fee',
            dataType: 'decimal',
            description: 'Tx fee cost',
            sampleValue: '4.0',
          },
          {
            param: 'node_type',
            dataType: 'string',
            description: 'Network standardized type of node',
            sampleValue: 'PRIMARY_VALIDATOR',
          },
          {
            param: 'seed_block_identifier',
            dataType: 'string',
            description: 'Identifier of the last block that was used when the root account file was generated',
            sampleValue: ' ',
          },
          {
            param: 'root_account_file',
            dataType: 'URL',
            description:
              'Record of all account balances at the moment in time that the validator was first set to "primary"',
            sampleValue:
              'https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json',
          },
          {
            param: 'protocol',
            dataType: 'string',
            description: 'Protocol other nodes will use to connect (http or https)',
            sampleValue: 'http',
          },
          {
            param: 'ip_address',
            dataType: 'IP',
            description: 'Public IP address',
            sampleValue: '64.225.47.205',
          },
          {
            param: 'port',
            dataType: 'integer',
            description: 'Port number',
            sampleValue: '80',
          },
          {
            param: 'version',
            dataType: 'string',
            description: 'API version',
            sampleValue: 'v1.0',
          },
        ]}
        tableHeading={
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
              <th>Sample Value</th>
            </tr>
          </thead>
        }
      />
    </>
  );

  return (
    <section>
      <h1 className="page-title">Validator Deployment Guide</h1>
      <p>This guide will detail the deployment instructions for both primary validators and confirmation validators.</p>
      <InstallDependencies />
      <Firewall />
      <ProjectSetup name="Validator" />
      <NGINX name="Validator" />
      <Redis />
      <GatewayInterface name="Validator" />
      <Celery name="Validator" networkSigningKey="6f812a35643b55a77f71c3b722504fbc5918e83ec72965f7fd33865ed0be8f81" />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration initializationCommand={renderInitializationCommands()} name="Validator" />
      <Troubleshooting />
    </section>
  );
};

export default Validator;
