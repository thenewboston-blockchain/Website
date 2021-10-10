import React from 'react';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {duotoneDark, solarizedlight} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import bashLang from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import jsonLang from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import jsxLang from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import pythonLang from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import scssLang from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import typescriptLang from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';

import {SFC} from 'types/generic';

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

const BaseCodeSnippet: SFC<BaseCodeSnippetProps> = ({code, language, light = false, showLineNumbers = true}) => {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={showLineNumbers}
      style={light ? solarizedlight : duotoneDark}
      data-testid="BaseCodeSnippet"
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default BaseCodeSnippet;
