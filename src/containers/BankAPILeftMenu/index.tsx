import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const BankAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/bank-api/introduction">Introduction</NavLink>
      <NavLink to="/bank-api/bank-registration">Bank Registration</NavLink>
    </LeftMenu>
  );
};

export default BankAPILeftMenu;
