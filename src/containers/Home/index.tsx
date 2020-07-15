import React from 'react';

import MarketingButton from 'components/MarketingButton';
import Feature from './Feature';

import Chart from 'assets/images/chart.png';
import KeyPair from 'assets/images/KeyPair.png';

import './Home.scss';

const Home = () => {
  const renderFeatures = () => (
    <div className="features">
      <Feature icon="speed" title="Instant Transactions" subtitle="Say goodbye to 10 minute block times" />
      <Feature icon="verified_user" title="Trust Based" subtitle="No more PoW or PoS" />
      <Feature icon="code" title="Open Source" subtitle="Built and maintained by thenewboston community" />
    </div>
  );

  const renderHero = () => (
    <div className="hero">
      <h1>Welcome to thenewboston</h1>
      <h2>
        A <span className="red">Trust Based</span> Open Source Digital Currency
      </h2>
      <div className="marketing-buttons">
        <MarketingButton website="slack" />
        <MarketingButton website="github" />
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="performance">
      <img alt="chart" className="chart" src={Chart} />
      <div>
        <h3>Performance</h3>
        <p>
          An inherent defect in the traditional Blockchain architecture is the inefficient composition of blocks. Blocks
          in the Bitcoin Blockchain are composed of multiple unrelated transactions. This indicates that within any
          given block, the earliest transactions experience significant delays as later transactions continue to
          accumulate until the entire block eventually becomes verified.
        </p>
        <p>
          Our architecture was built on the idea that when building a distributed payment ledger, it is not the
          transaction processing itself that requires distribution across multiple servers, for this often results in
          duplicate work being done by several servers causing an inherent inefficiency in the system. It is rather the
          ability to fairly elect a single validation server and consensual acceptance of the produced results that
          requires distribution among peers. This allows for highly performant transaction validation within a
          decentralized network.
        </p>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="security">
      <div>
        <h3>Security</h3>
        <p>
          All account balances and transactions over the network are secured through the use of digital signatures. When
          transferring points between accounts, sending users digitally sign their transactions in order to prove
          ownership of their funds and authorize the transfer of points to others. All participants on the network are
          able to publicly view and verify the authenticity of these signatures without the need for the sender to ever
          reveal their secret "signing key". The signing key for all user accounts are kept private and secured by the
          users themselves on their own personal devices.
        </p>
        <p>
          Our network uses the{' '}
          <a rel="noopener noreferrer" href="https://ed25519.cr.yp.to/">
            Ed25519 Digital Signature Algorithm
          </a>{' '}
          which allows for both highly performant and highly secure signatures.
        </p>
      </div>
      <img alt="key-pair" className="key-pair" src={KeyPair} />
    </div>
  );

  const renderTrust = () => (
    <div className="trust">
      <h3>Trust</h3>
      <p>
        The single most important concept in this network architecture is the concept of trust. It is also where this
        network deviates most from traditional Blockchain based cryptocurrencies that abide by common consensus
        mechanisms such as Proof of Work (PoW) or Proof of Stake (PoS).
      </p>
      <p>
        It is our belief that we have incorrectly turned to computer science in search of a solution to a question in
        which computers are simply not capable of solving. In an effort to quantify the level of "trust", we have lost
        sight of what "trust" truly means. Trust is not a formula. It is not an equation in which a given set of inputs
        should always lead to an expected output. It is an ever evolving, ever changing feeling in which only life is
        capable of experiencing. It is the unseen bond in which time can both strengthen or break.
      </p>
      <p>
        By establishing a network architecture in which discrepancies in transactions are able to be solved quickly and
        efficiently through the use of human quantified trust, it is possible to construct a highly scalable, highly
        reliable, and highly performant globally distributed network. A trust based network architecture would
        immediately reject any node deemed untrustworthy, regardless of computing power or the amount of wealth that
        node controlled.
      </p>
    </div>
  );

  return (
    <div className="Home">
      {renderHero()}
      {renderFeatures()}
      {renderPerformance()}
      {renderTrust()}
      {renderSecurity()}
    </div>
  );
};

export default Home;
