import React from 'react';

import TopNav from 'containers/TopNav';

import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <TopNav />
      </div>
      <div className="main-content">Home</div>
    </div>
  );
};

export default Home;
