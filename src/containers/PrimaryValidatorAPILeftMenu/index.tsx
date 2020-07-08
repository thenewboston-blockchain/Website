import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const PrimaryValidatorAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/primary-validator-api/introduction">Introduction</NavLink>
    </LeftMenu>
  );
};

export default PrimaryValidatorAPILeftMenu;
