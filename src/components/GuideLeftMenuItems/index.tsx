import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenuGroup from 'components/LeftMenuGroup';

const GuideLeftMenuItems: FC = () => {
  return (
    <>
      <LeftMenuGroup title="Guide" urlBase="guide">
        <NavLink to="/guide/introduction">Introduction</NavLink>
        <NavLink to="/guide/accounts">Accounts</NavLink>
        <NavLink to="/guide/blocks">Blocks</NavLink>
        <NavLink to="/guide/transaction-fees">Transaction Fees</NavLink>
        <NavLink to="/guide/root-account-file">Root Account File</NavLink>
        <NavLink to="/guide/banks">Banks</NavLink>
        <NavLink to="/guide/validators">Validators</NavLink>
        <NavLink to="/guide/confirmation-validators">Confirmation Validators</NavLink>
        <NavLink to="/guide/confirmation-services">Confirmation Services</NavLink>
        <NavLink to="/guide/node-identifiers">Node Identifiers</NavLink>
        <NavLink to="/guide/resync-triggers">Resync Triggers</NavLink>
        <NavLink to="/guide/resync-process">Resync Process</NavLink>
        <NavLink to="/guide/trust">Trust</NavLink>
        <NavLink to="/guide/initial-funds">Initial Funds</NavLink>
        <NavLink to="/guide/best-practices">Best Practices</NavLink>
        <NavLink to="/guide/future-development">Future Development</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup title="Deployment Guides" urlBase="deployment-guide">
        <NavLink to="/deployment-guide/bank">Bank</NavLink>
        <NavLink to="/deployment-guide/validator">Validator</NavLink>
      </LeftMenuGroup>

      <LeftMenuGroup title="Style Guides" urlBase="style-guide">
        <NavLink to="/style-guide/react">React / JSX</NavLink>
        <NavLink to="/style-guide/css">CSS / SASS</NavLink>
      </LeftMenuGroup>
    </>
  );
};

export default GuideLeftMenuItems;
