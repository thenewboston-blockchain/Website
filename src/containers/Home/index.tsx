import React from 'react';

import Footer from 'containers/Footer';
import TopNav from 'containers/TopNav';

import './Home.scss';

const Home = () => {
  const renderHero = () => (
    <div className="hero">
      <h1>thenewboston</h1>
      <h2>Open Source Digital Currency</h2>
      <div className="action-buttons">
        <button>Download</button>
        <button>View docs</button>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="overview">
      <h3>Overview</h3>
      <p>
        Digital currency allows users from all around the world to send points to each other in exchange for goods and
        services. Unlike traditional currency, users are in complete control of their own accounts. On thenewboston, all
        transactions are instant. Overdraft, minimum balance, and checking account fees do not exist. All of your points
        are available and accessible 24 hours a day, 7 days a week, 365 days a year.
      </p>
      <p>
        This network is an open source, peer-to-peer network. This means that there is no single entity in control. It
        is built and maintained entirely by a team of volunteers from all around the globe. All of the source code is
        open source and publicly viewable on <a href="https://github.com/thenewboston-developers">our GitHub page</a>.
      </p>
    </div>
  );

  const renderPerformance = () => (
    <div className="performance">
      <h3>Performance</h3>
      <p>Compare to other crypto</p>
    </div>
  );

  const renderSecurity = () => (
    <div className="security">
      <h3>Security</h3>
      <p>How is everything kept safe and secure?</p>
    </div>
  );

  return (
    <div className="Home">
      <div className="top">
        <TopNav />
      </div>
      <div className="main-content">
        {renderHero()}
        {renderOverview()}
        {renderPerformance()}
        {renderSecurity()}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
