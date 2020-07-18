import React from 'react';

import Celery from 'containers/DeploymentGuides/Celery';
import Commands from 'components/Commands';
import Firewall from 'containers/DeploymentGuides/Firewall';
import GatewayInterface from 'containers/DeploymentGuides/GatewayInterface';
import InstallDependencies from 'containers/DeploymentGuides/InstallDependencies';
import NGINX from 'containers/DeploymentGuides/NGINX';
import ProjectSetup from 'containers/DeploymentGuides/ProjectSetup';
import Redis from 'containers/DeploymentGuides/Redis';
import StaticFilesAndApplicationConfiguration from 'containers/DeploymentGuides/StaticFilesAndApplicationConfiguration';
import SystemServices from 'containers/DeploymentGuides/SystemServices';
import Troubleshooting from 'containers/DeploymentGuides/Troubleshooting';

const Bank = () => {
  const renderInitializationCommands = () => (
    <>
      <Commands code={`python3 manage.py initialize_bank`} comment="Initialize server as bank" />
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
      <Celery name="Bank" />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration initializationCommand={renderInitializationCommands()} name="Bank" />
      <Troubleshooting />
    </section>
  );
};

export default Bank;
