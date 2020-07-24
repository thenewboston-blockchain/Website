import React from 'react';

import MarketingButton from 'components/MarketingButton';

import Screenshot from './Screenshot.png';

import './Home.scss';

const Home = () => {
  const renderHero = () => (
    <div className="hero">
      <MarketingButton website="slack" />
      <MarketingButton website="github" />
      <img alt="screenshot" className="screenshot" src={Screenshot} />
    </div>
  );

  const renderInstantTransactions = () => (
    <div className="instant-transactions">
      <h1>hey</h1>
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
