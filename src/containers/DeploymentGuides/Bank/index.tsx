import React from 'react';

import Celery from 'containers/DeploymentGuides/Celery';
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
  return (
    <section>
      <h1 className="page-title">Bank Deployment Guide</h1>
      <p>
        All banks have the option of connecting to other banks. Although it is not a requirement, it is often useful for
        a bank to inspect the trust levels assigned by other banks. This data is used primarily in determining which
        primary validator to elect as well as which confirmation validators to connect to and purchase services from.
      </p>
      <InstallDependencies />
      <Firewall />
      <ProjectSetup />
      <NGINX />
      <Redis />
      <GatewayInterface />
      <Celery />
      <SystemServices />
      <StaticFilesAndApplicationConfiguration />
      <Troubleshooting />
    </section>
  );
};

export default Bank;
