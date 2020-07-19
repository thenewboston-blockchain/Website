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

const Bank = () => {
  const renderInitializationCommands = () => (
    <>
      <Commands code={`python3 manage.py initialize_bank`} comment="Initialize server as bank" />
      <ParamsTable
        items={[
          {
            param: 'node_identifier',
            dataType: 'string',
            description: 'Public key used to sign requests to other nodes',
            sampleValue: 'd5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1',
          },
          {
            param: 'account_number',
            dataType: 'string',
            description: 'The account number where Tx fees will be sent',
            sampleValue: '5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8',
          },
          {
            param: 'default_transaction_fee',
            dataType: 'decimal',
            description: 'Tx fee cost',
            sampleValue: '1.0',
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
          <tr>
            <th>Parameter</th>
            <th>Description</th>
            <th>Sample Value</th>
          </tr>
        }
      />
      <Commands code={`python3 manage.py connect_to_primary_validator`} comment="Connect to the primary validator" />
    </>
  );

  return (
    <section>
      <h1 className="page-title">Bank Deployment Guide</h1>
      <p>This guide will detail the deployment instructions for banks.</p>
      <InstallDependencies />
      <Firewall />
      <ProjectSetup name="Bank" />
      <NGINX name="Bank" />
      <Redis />
      <GatewayInterface name="Bank" />
      <Celery name="Bank" networkSigningKey="e5e5fec0dcbbd8b0a76c67204823678d3f243de7a0a1042bb3ecf66285cd9fd4" />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration initializationCommand={renderInitializationCommands()} name="Bank" />
      <Troubleshooting />
    </section>
  );
};

export default Bank;
