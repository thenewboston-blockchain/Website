import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Button} from 'components';

import HomeComparisonCards from 'containers/Home/HomeComparisonCards';

import './HomeInstantTransactions.scss';

const HomeInstantTransactions: FC = () => {
  return (
    <div className="HomeInstantTransactions">
      <div className="HomeInstantTransactions__content-container">
        <div className="HomeInstantTransactions-mini">INSTANT TRANSACTIONS</div>
        <h1>Say goodbye to 10 minute block times</h1>
        <div className="text-snippets">
          <div className="left-block">
            <p>
              An inherent defect in the traditional Blockchain architecture is the inefficient composition of blocks.
              Blocks in the Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that
              within any given block, the earliest transactions experience significant delays as later transactions
              continue to accumulate until the entire block eventually becomes verified.
            </p>
            <NavLink className="display-large" to="/guide/introduction">
              <Button>View Guide</Button>
            </NavLink>
          </div>
          <div className="right-block">
            <p>
              Our architecture was built on the idea that when building a distributed payment ledger, it is not the
              transaction processing itself that requires distribution across multiple servers, for this often results
              in duplicate work being done by several servers causing an inherent inefficiency in the system. It is
              rather the ability to fairly elect a single validation server and consensual acceptance of the produced
              results that requires distribution among peers. This allows for highly performant transaction validation
              within a decentralized network.
            </p>
            <NavLink className="display-small" to="/guide/introduction">
              <Button>View Guide</Button>
            </NavLink>
          </div>
        </div>
        <HomeComparisonCards />
      </div>
      <svg className="HomeInstantTransactions__background-graphic" viewBox="0 0 1366 659" fill="none">
        <path d="M1366 0L0 147L0 659H1366.5L1366 0Z" fill="#131F41" />
      </svg>
      <div className="HomeInstantTransactions__blue-block" />
    </div>
  );
};

export default HomeInstantTransactions;
