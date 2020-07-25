import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian, routeros} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ComponentProps {
  code: string;
  language: string;
  light?: boolean;
  showLineNumbers?: boolean;
}

const BaseCodeHighlighter: FC<ComponentProps> = ({code, language, light = false, showLineNumbers = true}) => {
  return (
    <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} style={light ? routeros : obsidian}>
      {code}
    </SyntaxHighlighter>
  );
};

export default BaseCodeHighlighter;
