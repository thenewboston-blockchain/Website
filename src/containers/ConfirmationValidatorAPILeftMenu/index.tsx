import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const ConfirmationValidatorAPILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/confirmation-validator-api/accounts">Accounts</NavLink>
      <NavLink to="/confirmation-validator-api/bank-confirmation-services">Bank Confirmation Services</NavLink>
      <NavLink to="/confirmation-validator-api/banks">Banks</NavLink>
      <NavLink to="/confirmation-validator-api/config">Config</NavLink>
      <NavLink to="/confirmation-validator-api/confirmation-blocks">Confirmation Blocks</NavLink>
      <NavLink to="/confirmation-validator-api/connection-requests">Connection Requests</NavLink>
      <NavLink to="/confirmation-validator-api/validators">Validators</NavLink>
    </LeftMenu>
  );
};

export default ConfirmationValidatorAPILeftMenu;
