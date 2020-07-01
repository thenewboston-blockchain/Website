import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ComponentProps {
  code: string;
}

const CodeHighlighter: FC<ComponentProps> = ({code}) => {
  return (
    <SyntaxHighlighter language="python" showLineNumbers style={obsidian}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
