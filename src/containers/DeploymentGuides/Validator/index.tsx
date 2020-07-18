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

const Validator = () => {
  const renderInitializationCommands = () => (
    <Commands code={`python3 manage.py initialize_validator`} comment="Initialize server as primary validator" />
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
