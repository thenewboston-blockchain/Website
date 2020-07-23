import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian, routeros } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeHighlighter.scss';

interface ComponentProps {
  code: string;
  language?: string;
  light?: boolean;
  showLineNumbers?: boolean;
}

const CodeHighlighter: FC<ComponentProps> = ({code, language = 'python', light = false, showLineNumbers = true}) => {
  return (
    <div className="app-code-highlighter">
      <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} style={light ? routeros : obsidian}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
