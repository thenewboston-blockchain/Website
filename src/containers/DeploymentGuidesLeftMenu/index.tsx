import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const DeploymentGuidesLeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/deployment-guides/bank">Bank</NavLink>
      <NavLink to="/deployment-guides/validator">Validator</NavLink>
    </LeftMenu>
  );
};

export default DeploymentGuidesLeftMenu;
