import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const ConfirmationValidatorAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/confirmation-validator-api/introduction">Introduction</NavLink>
    </LeftMenu>
  );
};

export default ConfirmationValidatorAPILeftMenu;
