import React from 'react';

import TopNav from 'containers/TopNav';

import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <TopNav />
      </div>
      <div className="main-content">
        <div className="hero">
          <h1>thenewboston</h1>
          <h2>Open Source Digital Currency</h2>
          <div className="action-buttons">
            <button>Download</button>
            <button>View docs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
