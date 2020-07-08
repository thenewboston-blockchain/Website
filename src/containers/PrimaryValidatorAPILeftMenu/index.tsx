import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const PrimaryValidatorAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/primary-validator-api/introduction">Introduction</NavLink>
      <NavLink to="/primary-validator-api/accounts">Accounts</NavLink>
      <NavLink to="/primary-validator-api/bank-blocks">Bank Blocks</NavLink>
      <NavLink to="/primary-validator-api/banks">Banks</NavLink>
      <NavLink to="/primary-validator-api/config">Config</NavLink>
      <NavLink to="/primary-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
      <NavLink to="/primary-validator-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/primary-validator-api/validators">Validators</NavLink>
    </LeftMenu>
  );
};

export default PrimaryValidatorAPILeftMenu;
