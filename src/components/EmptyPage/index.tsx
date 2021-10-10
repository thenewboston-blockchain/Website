import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './EmptyPage.scss';

const EmptyPage: SFC = ({className}) => {
  return (
    <div className={clsx('EmptyPage', className)} data-testid="EmptyPage">
      <h1>No items to display</h1>
    </div>
  );
};

export default EmptyPage;
