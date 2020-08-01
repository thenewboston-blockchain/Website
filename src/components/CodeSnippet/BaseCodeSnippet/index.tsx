import React, {FC} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {obsidian, routeros} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export enum SnippetLang {
  bash = 'bash',
  json = 'json',
  jsx = 'jsx',
  python = 'python',
  scss = 'scss',
  typescript = 'typescript',
}

interface ComponentProps {
  code: string;
  language: SnippetLang;
  light?: boolean;
  showLineNumbers?: boolean;
}

const BaseCodeSnippet: FC<ComponentProps> = ({code, language, light = false, showLineNumbers = true}) => {
  return (
    <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} style={light ? routeros : obsidian}>
      {code}
    </SyntaxHighlighter>
  );
};

export default BaseCodeSnippet;
