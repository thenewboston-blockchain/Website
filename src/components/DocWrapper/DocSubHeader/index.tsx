import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './DocSubHeader.scss';

const DocSubHeader: SFC = ({children, className}) => {
  return (
    <h3 className={clsx('DocSubHeader', className)} data-testid="DocSubHeader">
      {children}
    </h3>
  );
};

export default DocSubHeader;
