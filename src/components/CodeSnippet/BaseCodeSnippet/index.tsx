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

export interface BaseCodeSnippetProps {
  code: string;
  language: SnippetLang;
  light?: boolean;
  showLineNumbers?: boolean;
}

const BaseCodeSnippet: FC<BaseCodeSnippetProps> = ({code, language, light = false, showLineNumbers = true}) => {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={showLineNumbers}
      style={light ? routeros : obsidian}
      data-testid="BaseCodeSnippet"
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default BaseCodeSnippet;
