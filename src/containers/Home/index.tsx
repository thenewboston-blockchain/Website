import React from 'react';

import MarketingButton from 'components/MarketingButton';

import IntroPreview from './IntroPreview.png';

import './Home.scss';

const Home = () => {
  const renderHero = () => (
    <div className="Home__hero">
      <svg className="Home__background" viewBox="0 0 1366 396">
        <path fill="#F6F9FC" fillRule="nonzero" d="M0 395.5L1366 106V0H0v395.5z" />
      </svg>

      <div className="Home__hero-content">
        <div className="Home__content-left">
          <h1 className="Home__heading">Transact in seconds with cryptocurrency</h1>
          <p className="Home__hero-description">
            An open source project built and maintained by thenewboston community to give the world the ability to send
            transactions in seconds with cryptocurrency and give value to the people.
          </p>
          <div className="Home__button-links-container">
            <MarketingButton website="slack" />
            <MarketingButton website="github" />
          </div>
        </div>
        <div className="Home__content-right">
          <img alt="Application Preview" className="Home__image-preview" src={IntroPreview} />
        </div>
      </div>
    </div>
  );

  const renderInstantTransactions = () => (
    <div className="Home__instant-transactions">
      <div>
        <span className="app-subheader">Instant Transactions</span>

        <h2 className="Home__heading-secondary">
          Say goodbye to <br /> 10 minute block times
        </h2>

        <div className="Home__pitch-content">
          <div>
            <p>
              An inherent defect in the traditional Blockchain architecture is the inefficient composition of blocks.
              Blocks in the Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that
              within any given block, the earliest transactions experience significant delays as later transactions
              continue to accumulate until the entire block eventually becomes verified.
            </p>
            {/*<AppButton primary>View Guide<AppIcon icon="chevron-right" /></AppButton>*/}
          </div>
          <div>
            <p>
              Our architecture was built on the idea that when building a distributed payment ledger, it is not the
              transaction processing itself that requires distribution across multiple servers, for this often results
              in duplicate work being done by several servers causing an inherent inefficiency in the system. It is
              rather the ability to fairly elect a single validation server and consensual acceptance of the produced
              results that requires distribution among peers. This allows for highly performant transaction validation
              within a decentralized network
            </p>
          </div>
        </div>

        <div className="Home__comparison">
          <div className="Home__card">
            {/*<img alt="Bitcoin Logo" src={BitcoinLogo} className="Home__card-logo" />*/}

            <div className="Home__card-item">
              <span className="Home__card-item-value">7</span>
              <span className="Home__card-item-label">txs per second</span>
            </div>

            <div className="Home__card-item">
              <span className="Home__card-item-value">~5 min</span>
              <span className="Home__card-item-label">avg. tx time</span>
            </div>
          </div>
          <div>{/*<AppIcon className="Home__card-arrow" icon="arrow-right" />*/}</div>
          <div className="Home__card">
            {/*<AppLogo className="Home__card-logo" />*/}

            <div className="Home__card-item">
              <span className="Home__card-item-value">3,238</span>
              <span className="Home__card-item-label">txs per second</span>
            </div>

            <div className="Home__card-item">
              <span className="Home__card-item-value">0.015 seconds</span>
              <span className="Home__card-item-label">avg. tx time</span>
            </div>
          </div>
        </div>
      </div>

      <svg className="Home__footer-graphic" viewBox="0 0 1366 659" fill="none">
        <path d="M1366 0L0 147L0.5 659H1366.5L1366 0Z" fill="#131F41" />
      </svg>
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
