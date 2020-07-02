import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const BankAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/bank-api/introduction">Introduction</NavLink>
      <NavLink to="/bank-api/bank-registrations">Bank Registrations</NavLink>
      <NavLink to="/bank-api/account-registrations">Account Registrations</NavLink>
    </LeftMenu>
  );
};

export default BankAPILeftMenu;
