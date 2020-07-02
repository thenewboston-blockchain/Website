import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ComponentProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeHighlighter: FC<ComponentProps> = ({code, language = 'python', showLineNumbers = true}) => {
  return (
    <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} style={obsidian}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
