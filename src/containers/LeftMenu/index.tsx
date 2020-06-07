import React from 'react';
import {NavLink} from 'react-router-dom';

import './LeftMenu.scss';

const LeftMenu = () => {
  return (
    <nav className="LeftMenu">
      <NavLink to="/docs/introduction">Introduction</NavLink>
      <NavLink to="/docs/overview">Overview</NavLink>
      <NavLink to="/docs/accounts">Accounts</NavLink>
      <NavLink to="/docs/transactions">Transactions</NavLink>
      <NavLink to="/docs/transaction-fees">Transaction Fees</NavLink>
    </nav>
  );
};

export default LeftMenu;
