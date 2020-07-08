import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const BankAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/bank-api/introduction">Introduction</NavLink>
      <NavLink to="/bank-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/bank-api/confirmation-blocks">Confirmation Blocks</NavLink>
    </LeftMenu>
  );
};

export default BankAPILeftMenu;
