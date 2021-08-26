import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './DocInlineCode.scss';

const DocInlineCode: SFC = ({children, className}) => {
  return (
    <code className={clsx('DocInlineCode', className)} data-testid="DocInlineCode">
      {children}
    </code>
  );
};

export default DocInlineCode;
