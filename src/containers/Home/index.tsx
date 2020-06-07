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
        <h1>thenewboston</h1>
        <h2>A Trust Based Distributed Network Architecture</h2>
        <p>
          This paper will outline the foundation for a trust based distributed network architecture. This architecture
          offers an efficient yet scalable peer-to-peer consensus mechanism through the election of a centralized
          validation node by a distributed network of trusted nodes, where the amount of trust is quantified solely by
          human judgement.
        </p>
        <p>
          The architecture is built on the idea that when building a distributed public ledger, it is not the
          transaction processing itself that requires distribution across multiple nodes, for this often results in
          duplicate work being done by several nodes causing an inherent inefficiency in the system. It is rather the
          ability to elect an appointed validator and consensual acceptance of the produced results that requires
          distribution among peers. This allows for highly performant centralized validation within a decentralized
          network.
        </p>
      </div>
    </div>
  );
};

export default Home;
