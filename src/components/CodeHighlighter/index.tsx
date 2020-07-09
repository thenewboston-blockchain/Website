import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atelierPlateauLight, obsidian} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ComponentProps {
  code: string;
  language?: string;
  light?: boolean;
  showLineNumbers?: boolean;
}

const CodeHighlighter: FC<ComponentProps> = ({code, language = 'python', light = false, showLineNumbers = true}) => {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={showLineNumbers}
      style={light ? atelierPlateauLight : obsidian}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
