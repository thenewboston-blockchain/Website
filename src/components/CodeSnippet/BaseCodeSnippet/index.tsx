import React, {FC} from 'react';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import {obsidian, routeros} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import bashLang from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import jsonLang from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import jsxLang from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import pythonLang from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import scssLang from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
import typescriptLang from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';

export enum SnippetLang {
  bash = 'bash',
  json = 'json',
  jsx = 'jsx',
  python = 'python',
  scss = 'scss',
  typescript = 'typescript',
}

SyntaxHighlighter.registerLanguage(SnippetLang.bash, bashLang);
SyntaxHighlighter.registerLanguage(SnippetLang.json, jsonLang);
SyntaxHighlighter.registerLanguage(SnippetLang.jsx, jsxLang);
SyntaxHighlighter.registerLanguage(SnippetLang.python, pythonLang);
SyntaxHighlighter.registerLanguage(SnippetLang.scss, scssLang);
SyntaxHighlighter.registerLanguage(SnippetLang.typescript, typescriptLang);

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
