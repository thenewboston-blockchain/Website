import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import code from './code-snippet';

import './Introduction.scss';

const Introduction = () => (
  <>
    <div className="Introduction">Introduction</div>
    <SyntaxHighlighter language="python" showLineNumbers style={obsidian}>
      {code}
    </SyntaxHighlighter>
  </>
);

export default Introduction;
