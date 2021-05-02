import React from 'react';

export const getMultiLineDivFromString = (content: string) => {
  return content.split('\n').map((line, i) => <div key={i}> {line}</div>);
};
