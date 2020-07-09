import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const DeploymentGuidesLeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/deployment-guides/banks">Banks</NavLink>
      <NavLink to="/deployment-guides/validators">Validators</NavLink>
    </LeftMenu>
  );
};

export default DeploymentGuidesLeftMenu;
