import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const DocsLeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/docs/introduction">Introduction</NavLink>
      <NavLink to="/docs/overview">Overview</NavLink>
      <NavLink to="/docs/accounts">Accounts</NavLink>
      <NavLink to="/docs/transactions">Transactions</NavLink>
      <NavLink to="/docs/transaction-fees">Transaction Fees</NavLink>
      <NavLink to="/docs/balance-sheet">Balance Sheet</NavLink>
      <NavLink to="/docs/banks">Banks</NavLink>
      <NavLink to="/docs/validators">Validators</NavLink>
      <NavLink to="/docs/blocks">Blocks</NavLink>
      <NavLink to="/docs/backup-validators">Backup Validators</NavLink>
      <NavLink to="/docs/confirmations">Confirmations</NavLink>
      <NavLink to="/docs/trust">Trust</NavLink>
      <NavLink to="/docs/initial-funds">Initial Creation and Distribution of Funds</NavLink>
      <NavLink to="/docs/best-practices">Best Practices</NavLink>
      <NavLink to="/docs/future-development">Future Development</NavLink>
    </LeftMenu>
  );
};

export default DocsLeftMenu;
