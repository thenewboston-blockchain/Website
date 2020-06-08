import React from 'react';

const Introduction = () => (
  <>
    <section>
      <h1 className="page-title">Introduction</h1>
      <p>
        This documentation will outline the foundation of a trust based distributed architecture in which our network is
        built upon. This architecture offers an efficient yet scalable peer-to-peer consensus mechanism through the
        election of a primary validation node by a distributed network of trusted nodes, where the amount of trust is
        quantified solely by human judgement.
      </p>
      <p>
        The architecture is based on the idea that when building a distributed payment ledger, it is not the transaction
        processing itself that requires distribution across multiple servers, for this often results in duplicate work
        being done by several network nodes causing an inherent inefficiency in the system. It is rather the ability to
        fairly elect a single validation server and consensual acceptance of the produced results that requires
        distribution among peers. This allows for highly performant transaction validation within a decentralized
        network.
      </p>
    </section>
  </>
);

export default Introduction;
