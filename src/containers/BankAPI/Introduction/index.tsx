import React from 'react';

import CodeHighlighter from 'components/CodeHighlighter';

import code from './code-snippet';

const Introduction = () => (
  <>
    <h1 className="page-title">Introduction</h1>
    <p>
      Banks play a critical role regarding several aspects of the network. They act as the bond between end users and
      the network, and have several responsibilities to each.
    </p>
    <CodeHighlighter code={code} />
  </>
);

export default Introduction;
