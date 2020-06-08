import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import code from './code-snippet';

const Introduction = () => (
  <>
    <h1 className="page-title">Introduction</h1>
    <p>
      Bacon ipsum dolor amet buffalo spare ribs t-bone, landjaeger alcatra jerky bresaola brisket corned beef short
      ribs. Short ribs ham hock porchetta pork chislic andouille alcatra sausage bresaola jowl beef. Tongue burgdoggen
      sausage ham sirloin andouille leberkas doner boudin. Meatball shankle kevin porchetta. Burgdoggen pork belly
      shoulder short loin strip steak andouille ground round beef ribs.
    </p>
    <SyntaxHighlighter language="python" showLineNumbers style={obsidian}>
      {code}
    </SyntaxHighlighter>
  </>
);

export default Introduction;
