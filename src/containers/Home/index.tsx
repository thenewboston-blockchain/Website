import React from 'react';
import {NavLink} from 'react-router-dom';

import MarketingButton from 'components/MarketingButton';

import Screenshot from './Screenshot.png';

import './Home.scss';

const Home = () => {
  const renderHero = () => (
    <div className="hero">
      <svg className="background-graphic" viewBox="0 0 1366 396">
        <path fill="#F6F9FC" fillRule="nonzero" d="M0 395.5L1366 106V0H0v395.5z" />
      </svg>

      <div className="hero__left">
        <div className="content-container">
          <h1>Transact in seconds with cryptocurrency</h1>
          <h2>
            An open source project built and maintained by thenewboston community to give the world the ability to send
            transactions in seconds with cryptocurrency and give value to the people.
          </h2>
          <div className="marketing-buttons">
            <MarketingButton website="slack" />
            <MarketingButton website="github" />
          </div>
        </div>
      </div>

      <div className="hero__right">
        <div>
          <img alt="screenshot" className="screenshot" src={Screenshot} />
        </div>
      </div>
    </div>
  );

  const renderInstantTransactions = () => (
    <div className="instant-transactions">
      <svg className="background-graphic" viewBox="0 0 1366 659" fill="none">
        <path d="M1366 0L0 147L0.5 659H1366.5L1366 0Z" fill="#131F41" />
      </svg>
      <div className="content-container">
        <div className="instant-transactions-mini">INSTANT TRANSACTIONS</div>
        <h1>Say goodbye to 10 minute block times</h1>
        <div className="text-snippets">
          <div className="left-block">
            <p>
              An inherent defect in the traditional Blockchain architecture is the inefficient composition of blocks.
              Blocks in the Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that
              within any given block, the earliest transactions experience significant delays as later transactions
              continue to accumulate until the entire block eventually becomes verified.
            </p>
            <NavLink to="/guide/introduction">
              <button className="primary">View Guide</button>
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="Home">
      {renderHero()}
      {renderInstantTransactions()}
    </div>
  );
};

export default Home;
