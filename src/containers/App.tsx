import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ocean} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import codeString from './snippet';

const Component = () => {
  return (
    <SyntaxHighlighter language="python" showLineNumbers style={ocean}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const App = () => {
  return (
    <Router>
      <h1>hey</h1>
      <Component/>
    </Router>
  );
};

export default App;
