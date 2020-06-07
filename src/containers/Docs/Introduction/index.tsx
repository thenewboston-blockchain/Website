import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import code from './code-snippet';

const Introduction = () => (
  <>
    <section>
      <span>Introduction</span>
      <p>
        This paper will outline the foundation for a trust based distributed network architecture. This architecture
        offers an efficient yet scalable peer-to-peer consensus mechanism through the election of a centralized
        validation node by a distributed network of trusted nodes, where the amount of trust is quantified solely by
        human judgement.
      </p>
      <p>
        The architecture is built on the idea that when building a distributed public ledger, it is not the transaction
        processing itself that requires distribution across multiple nodes, for this often results in duplicate work
        being done by several nodes causing an inherent inefficiency in the system. It is rather the ability to elect an
        appointed validator and consensual acceptance of the produced results that requires distribution among peers.
        This allows for highly performant centralized validation within a decentralized network.
      </p>
    </section>
    <SyntaxHighlighter language="python" showLineNumbers style={obsidian}>
      {code}
    </SyntaxHighlighter>
  </>
);

export default Introduction;
